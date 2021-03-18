import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  strong: {
    fontWeight: "500",
    // textDecoration: 'underline',
  },
}));

export default function Summary({
  lastUpdatedAt,
  foundAvailability,
  appointmentCount,
  siteCount,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const hasAvailabilityClasses = useMediaQuery(theme.breakpoints.up("sm"))
    ? {}
    : { borderTop: 1, borderColor: "rgba(0, 0, 0, 0.12)" };

  const availabilityString = useMediaQuery(theme.breakpoints.up("sm"))
    ? "Appointments"
    : "Appts";

  // const ifAvailableString = `${appointmentCount}`

  return (
    <Box my={5}>
      <Card variant="outlined">
        <Grid container align={"center"}>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Typography>
                <strong className={classes.strong}>Updated</strong>:{" "}
                {lastUpdatedAt ? (
                  <Moment local calendar parse="YYYY-MM-DD HH:mm">
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
                <strong className={classes.strong}>{availabilityString}</strong>
                :{" "}
                {foundAvailability === null
                  ? ""
                  : foundAvailability === true
                  ? `${appointmentCount.toLocaleString()} available (${siteCount} sites) ✅`
                  : "Not Available ❌"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
