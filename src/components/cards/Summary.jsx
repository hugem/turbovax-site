import React from "react";

import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import HeaderCard from "./HeaderCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  strong: {
    fontWeight: "500",
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
  const availabilityString = useMediaQuery(theme.breakpoints.up("sm"))
    ? "Appointments"
    : "Appts";

  const leftComponent = (
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
  );

  const rightComponent = (
    <Typography>
      <strong className={classes.strong}>{availabilityString}</strong>:{" "}
      {foundAvailability === null
        ? ""
        : foundAvailability === true
        ? `${appointmentCount.toLocaleString()} available (${siteCount} sites) ✅`
        : "Not Available ❌"}
    </Typography>
  );

  return (
    <HeaderCard leftComponent={leftComponent} rightComponent={rightComponent} />
  );
}
