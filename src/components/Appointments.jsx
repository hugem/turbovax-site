import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import * as QueryString from "query-string";
import { Summary, AppointmentList, EmptyCard } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default class Appointments extends React.Component {
  state = {
    availableSites: [],
    unavailableSites: [],
    showUnavailable: false,
    lastUpdatedAt: null,
    filters: [],
  };

  mapPortalByKey(portals) {
    let toReturn = {};

    portals.forEach((item) => (toReturn[item.key] = item));

    return toReturn;
  }

  mapLocationToVars(props, portals) {
    const portal = portals[props.portal];

    return {
      appointments: props.appointments.summary.split(";"),
      area: props.area,
      count: props.appointments.count,
      isActive: props.active,
      isAvailable: props.available,
      lastAvailableAt: `${props.last_available_at} -400`,
      portalName: portal.name,
      portalShortName: portal.short_name,
      siteName: props.name,
      updatedAt: `${props.updated_at} -400`,
      url: portal.url,
    };
  }

  handleShowAvailabilityChange = (event) => {
    const newShowUnavailableValue = !this.state.showUnavailable;

    localStorage.setItem("showUnavailable", newShowUnavailableValue);

    this.setState({
      ...this.state,
      showUnavailable: newShowUnavailableValue,
    });
  };

  handleFilterChange = (filterObjects) => {
    this.setState({
      ...this.state,
      filters: filterObjects.map((filter) => filter.name.toLowerCase()),
    });
  };

  componentDidMount() {
    const showUnavailable = localStorage.getItem("showUnavailable") == "true";

    const regionString = QueryString.parse(window.location.search).region || "";

    const filterArray = regionString
      .split(",")
      .map((filter) => filter.toLowerCase());

    this.setState({ showUnavailable, filters: filterArray });

    axios
      .get(`https://turbovax.global.ssl.fastly.net/dashboard`)
      .then((res) => {
        const data = res.data;

        const portalsByKey = this.mapPortalByKey(data.portals);
        // const portalsByKey = data.portals.map((portal) => this.mapPortalByKey(portal));

        const mappedSites = data.locations
          .map((list) => this.mapLocationToVars(list, portalsByKey))
          .filter((site) => site.isActive);

        const sortedSites = mappedSites.sort((a, b) => {
          if (a.lastAvailableAt > b.lastAvailableAt) {
            return -1;
          }
          if (a.lastAvailableAt < b.lastAvailableAt) {
            return 1;
          }
          return 0;
        });

        const availableSites = sortedSites.filter((site) => site.isAvailable);
        const unavailableSites = sortedSites.filter(
          (site) => !site.isAvailable
        );

        const updatedAtArray = sortedSites.map((site) => site.updatedAt);

        const lastUpdatedAt = updatedAtArray.sort().reverse()[0];

        this.setState({
          availableSites: availableSites,
          unavailableSites: unavailableSites,
          showUnavailable,
          lastUpdatedAt,
          // totalCount,
          // portals,
        });
      });
  }

  render() {
    const filterEnabled = this.state.filters.length > 0;
    const activeAvailableSites = filterEnabled
      ? this.state.availableSites.filter(
          (site) => this.state.filters.indexOf(site.area.toLowerCase()) >= 0
        )
      : this.state.availableSites;

    const activeUnavailableSites = filterEnabled
      ? this.state.unavailableSites.filter(
          (site) => this.state.filters.indexOf(site.area.toLowerCase()) >= 0
        )
      : this.state.unavailableSites;

    const totalCount = activeAvailableSites
      .map((site) => site.count)
      .reduce((a, b) => a + b, 0);

    const foundAvailability = totalCount > 0;

    document.title = `(${totalCount.toLocaleString()}) TurboVax`;

    return (
      <div>
        <Summary
          lastUpdatedAt={this.state.lastUpdatedAt}
          foundAvailability={foundAvailability}
          appointmentCount={totalCount}
          siteCount={activeAvailableSites.length}
        />
        <EmptyCard
          foundAvailability={foundAvailability}
          unavailableCount={activeUnavailableSites.length}
          handleShowAvailabilityChange={this.handleShowAvailabilityChange}
          handleFilterChange={this.handleFilterChange}
          showUnavailable={this.state.showUnavailable}
          filters={this.state.filters}
        />
        <Box>
          <AppointmentList sites={activeAvailableSites} />
          {this.state.showUnavailable && (
            <AppointmentList sites={activeUnavailableSites} />
          )}
        </Box>
      </div>
    );
  }
}
