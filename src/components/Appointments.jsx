import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { Card, AppointmentList, EmptyCard } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default class Appointments extends React.Component {
  state = {
    availableSites: [],
    unavailableSites: [],
    showUnavailable: false,
  };

  mapPersonToVars(props) {
    return {
      siteName: props.site_name,
      portalName: props.portal_name,
      lastAvailableAt: props.last_available_at,
      url: props.url,
      appointments: props.appointment_times.split(";"),
      isAvailable: props.is_available,
      area: props.area,
      isActive: props.is_active,
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
      .get(
        `https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/5/public/full?alt=json`
      )
      .then((res) => {
        const jsonList = res.data.feed.entry;
        const mappedSites = jsonList
          .filter((info) => info.content.$t !== "")
          .map((list) => this.mapPersonToVars(JSON.parse(list.content.$t)))
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

        this.setState({
          availableSites: availableSites,
          unavailableSites: unavailableSites,
          showUnavailable,
        });
      });
  }

  render() {
    const foundAvailability = this.state.availableSites.length > 0;

    return (
      <Box>
        <AppointmentList sites={this.state.availableSites} />
        <EmptyCard
          foundAvailability={foundAvailability}
          handleChange={this.handleChange}
          showUnavailable={this.state.showUnavailable}
        />
        {this.state.showUnavailable && (
          <AppointmentList sites={this.state.unavailableSites} />
        )}
      </Box>
    );
  }
}
