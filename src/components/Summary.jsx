import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Moment from "react-moment";
import { useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

class Summary extends React.Component {
  state = {
    lastUpdatedAt: null,
    hasAvailability: null,
  };

  componentDidMount() {
    axios
      .get(
        `https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/1/public/full?alt=json`
      )
      .then((res) => {
        const jsonList = res.data.feed.entry;
        console.log(jsonList[1].content.$t);
        this.setState({
          lastUpdatedAt: jsonList[0].content.$t,
          hasAvailability: jsonList[1].content.$t === "TRUE",
        });
      });
  }

  render() {
    return (
      <Box my={5}>
        <Card variant="outlined">
          <Grid container align={"center"}>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Typography>
                  <b>Updated at: </b>
                  {this.state.lastUpdatedAt ? (
                    <Moment format="MMM D, h:mmA">
                      {this.state.lastUpdatedAt}
                    </Moment>
                  ) : (
                    ""
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2} {...this.props.hasAvailabilityClasses}>
                <Typography>
                  <b>Appointments: </b>
                  {this.state.hasAvailability === null
                    ? ""
                    : this.state.hasAvailability === true
                    ? "Available ✅"
                    : "Not Available ❌"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
  }
}

function StyledSummary(props) {
  const theme = useTheme();
  const hasAvailabilityClasses = useMediaQuery(theme.breakpoints.up("sm"))
    ? {}
    : { borderTop: 1, borderColor: "rgba(0, 0, 0, 0.12)" };

  return <Summary hasAvailabilityClasses={hasAvailabilityClasses} {...props} />;
}

export default StyledSummary;
