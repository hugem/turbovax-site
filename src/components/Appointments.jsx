import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import FilterButton from "./filters/FilterButton";
import { withRouter } from "react-router-dom";

import * as QueryString from "query-string";
import {
  Summary,
  AppointmentList,
  FilterCard,
  ShowUnavailableCard,
} from "./index";

class BaseAppointments extends React.Component {
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
    var url = new URL(window.location.href);
    var lowerCaseFilters = filterObjects.map((filter) =>
      filter.name.toLowerCase()
    );

    this.props.history.push(
      {
        state: this.state,
        // search: "?" + searchParams.toString(),
        search:
          "?" + new URLSearchParams({ region: lowerCaseFilters }).toString(),
      },
      this.state
    );

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
      .filter((string) => string !== "")
      .map((filter) => filter.toLowerCase());

    this.setState({ ...this.state, filters: filterArray });

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

  // shouldComponentUpdate(prevProps, prevState, snapshot) {
  //   const regionString = QueryString.parse(window.location.search).region || "";
  //   const filterArray = regionString
  //     .split(",")
  //     .filter((string) => string !== "")
  //     .map((filter) => filter.toLowerCase());

  //   const intersection = filterArray && prevState.filters;

  //   if (intersection.length !== filterArray.length) {
  //     this.setState({ ...this.state, filters: filterArray });
  //   }

  //   return true;
  // }

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

    // const filterEnabled = this.state.filters.length > 0;
    // const activeAvailableSites = this.state.availableSites;

    // const activeUnavailableSites = this.state.unavailableSites;

    const totalCount = activeAvailableSites
      .map((site) => site.count)
      .reduce((a, b) => a + b, 0);

    const foundAvailability = totalCount > 0;

    document.title = `(${totalCount.toLocaleString()}) TurboVax`;

    return (
      <div>
        <Box>
          <Summary
            lastUpdatedAt={this.state.lastUpdatedAt}
            foundAvailability={foundAvailability}
            appointmentCount={totalCount}
            siteCount={activeAvailableSites.length}
          />
        </Box>
        {/* <Box align="right" mb={2}>
          <FilterButton
            handleFilterChange={this.handleFilterChange}
            filters={this.state.filters} />
        </Box> */}
        {/* <FilterCard
          foundAvailability={foundAvailability}
          unavailableCount={activeUnavailableSites.length}
          handleShowAvailabilityChange={this.handleShowAvailabilityChange}
          showUnavailable={this.state.showUnavailable}
          handleFilterChange={this.handleFilterChange}
          filters={this.state.filters}
        /> */}
        <Box>
          <AppointmentList sites={activeAvailableSites} />
          <ShowUnavailableCard
            foundAvailability={foundAvailability}
            unavailableCount={activeUnavailableSites.length}
            handleShowAvailabilityChange={this.handleShowAvailabilityChange}
            showUnavailable={this.state.showUnavailable}
          />
          {this.state.showUnavailable && (
            <AppointmentList sites={activeUnavailableSites} />
          )}
        </Box>
      </div>
    );
  }
}

export default withRouter(BaseAppointments);
