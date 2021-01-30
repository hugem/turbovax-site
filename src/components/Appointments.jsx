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
      updatedAt: props.updated_at,
      url: props.url,
      appointments: props.appointment_times,
      isAvailable: props.is_available,
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/5/public/full?alt=json`
      )
      .then((res) => {
        const jsonList = res.data.feed.entry;
        const mappedSites = jsonList.map((list) =>
          this.mapPersonToVars(JSON.parse(list.content.$t))
        );

        const sortedSites = mappedSites.sort((a, b) => {
          if (a.isAvailable) {
            return -1;
          }
          if (b.isAvailable) {
            return 1;
          }

          if (a.updatedAt > b.updatedAt) {
            return -1;
          }
          if (a.updatedAt < b.updatedAt) {
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
        <Hidden mdDown>
          <LabelCard />
        </Hidden>
        <Hidden lgUp>
          <br></br>
          <br></br>
        </Hidden>
        {this.state.sites.map((site) => (
          <Card {...site} />
        ))}
      </Box>
    );
  }
}
