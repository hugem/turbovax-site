import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Moment from "react-moment";
import { useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Summary({ lastUpdatedAt, foundAvailability }) {
  // const classes = useStyles();
  const theme = useTheme();
  const hasAvailabilityClasses = useMediaQuery(theme.breakpoints.up("sm"))
    ? {}
    : { borderTop: 1, borderColor: "rgba(0, 0, 0, 0.12)" };

  return (
    <Box my={5}>
      <Card variant="outlined">
        <Grid container align={"center"}>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Typography>
                <b>Updated at: </b>
                {lastUpdatedAt ? (
                  <Moment local format="MMM D, h:mmA" parse="YYYY-MM-DD HH:mm">
                    {lastUpdatedAt}
                  </Moment>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2} {...hasAvailabilityClasses}>
              <Typography>
                <b>Appointments: </b>
                {foundAvailability === null
                  ? ""
                  : foundAvailability === true
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
// }

// function StyledSummary(props) {
//   const theme = useTheme();
//   const hasAvailabilityClasses = useMediaQuery(theme.breakpoints.up("sm"))
//     ? {}
//     : { borderTop: 1, borderColor: "rgba(0, 0, 0, 0.12)" };

//   return <Summary hasAvailabilityClasses={hasAvailabilityClasses} {...props} />;
// }

// export default StyledSummary;
