import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

// import { LOCATION_FILTERS_BY_ } from "./../../constants/filters";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "1rem",
  },
  reserveButton: {
    width: "100%",
  },
  cardContent: {
    paddingBottom: "16px!important",
  },
  lastAvailableAtLabel: {
    lineHeight: "initial",
  },
  lastAvailableAtValue: {
    fontSize: ".8rem",
  },
}));

export default function ShowUnavailableCard({
  foundAvailability,
  showUnavailable,
  handleShowAvailabilityChange,
  handleFilterChange,
  unavailableCount,
  filters,
}) {
  const classes = useStyles();

  let detectedAvailabilityString = "TurboVax has not detected availability";
  let showUnavailableString = `Show ${unavailableCount} unavailable sites`;
  const filterStringArray = filters.map((filter) => filter.name);
  const filterString = ` in [${filterStringArray.join(", ")}]`;

  if (filters.length > 0 && foundAvailability) {
    showUnavailableString += filterString;
  } else if (filters.length > 0 && !foundAvailability) {
    detectedAvailabilityString += filterString;
  }

  return (
    <MaterialCard className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Box align="center" py={2}>
          <Typography>
            {!foundAvailability && detectedAvailabilityString}
          </Typography>
          {!foundAvailability && <br />}
          <FormControlLabel
            labelPlacement="start"
            control={
              <Switch
                checked={showUnavailable}
                onChange={handleShowAvailabilityChange}
                name="showUnavailbleSites"
                color="primary"
              />
            }
            label={showUnavailableString}
          />
        </Box>
      </CardContent>
    </MaterialCard>
  );
}
