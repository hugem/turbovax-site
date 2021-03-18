import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
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
    // portals: {},
  };

  mapPortalByKey(portals) {
    let toReturn = {};

    portals.forEach((item) => (toReturn[item.key] = item));

    return toReturn;
  }

  mapLocationToVars(props, portals) {
    const portal = portals[props.portal];

    console.log(portal);

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

  handleChange = (event) => {
    const newShowUnavailableValue = !this.state.showUnavailable;

    localStorage.setItem("showUnavailable", newShowUnavailableValue);

    this.setState({
      ...this.state,
      showUnavailable: newShowUnavailableValue,
    });
  };

  componentDidMount() {
    const showUnavailable = localStorage.getItem("showUnavailable") == "true";
    this.setState({ showUnavailable });

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

        const totalCount = availableSites
          .map((site) => site.count)
          .reduce((a, b) => a + b, 0);

        document.title = `(${totalCount.toLocaleString()}) TurboVax`;

        this.setState({
          availableSites: availableSites,
          unavailableSites: unavailableSites,
          showUnavailable,
          lastUpdatedAt,
          // portals,
        });
      });
  }

  render() {
    const foundAvailability = this.state.availableSites.length > 0;

    return (
      <div>
        <Summary
          lastUpdatedAt={this.state.lastUpdatedAt}
          foundAvailability={foundAvailability}
        />
        <Box>
          <AppointmentList sites={this.state.availableSites} />
          <EmptyCard
            foundAvailability={foundAvailability}
            unavailableCount={this.state.unavailableSites.length}
            handleChange={this.handleChange}
            showUnavailable={this.state.showUnavailable}
          />
          {this.state.showUnavailable && (
            <AppointmentList sites={this.state.unavailableSites} />
          )}
        </Box>
      </div>
    );
  }
}
