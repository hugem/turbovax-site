import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { Card, LabelCard } from "./index";

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
    sites: [],
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

  componentDidMount() {
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
          if (a.isAvailable) {
            return -1;
          }
          if (b.isAvailable) {
            return 1;
          }

          if (a.lastAvailableAt > b.lastAvailableAt) {
            return -1;
          }
          if (a.lastAvailableAt < b.lastAvailableAt) {
            return 1;
          }
          return 0;
        });

        this.setState({ sites: mappedSites });
      });
  }

  render() {
    return (
      <Box>
        {this.state.sites.map((site, index) => (
          <Card {...site} key={index} />
        ))}
      </Box>
    );
  }
}
