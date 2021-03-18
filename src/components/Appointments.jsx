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
  };

  mapPersonToVars(props) {
    return {
      appointments: props.appointment_times.split(";"),
      area: props.area,
      count: props.appointment_count,
      isActive: props.is_active,
      isAvailable: props.is_available,
      lastAvailableAt: `${props.last_available_at} -400`,
      portalName: props.portal_name,
      siteName: props.site_name,
      updatedAt: `${props.updated_at} -400`,
      url: props.url,
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
      .get(`https://turbovax.global.ssl.fastly.net/locations`)
      .then((res) => {
        const mappedSites = res.data
          .map((list) => this.mapPersonToVars(list))
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

        document.title = `(${totalCount}) TurboVax`;

        this.setState({
          availableSites: availableSites,
          unavailableSites: unavailableSites,
          showUnavailable,
          lastUpdatedAt,
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
