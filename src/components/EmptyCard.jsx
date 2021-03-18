import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import useMediaQuery from "@material-ui/core/useMediaQuery";

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

export default function EmptyCard({
  foundAvailability,
  showUnavailable,
  handleShowAvailabilityChange,
  unavailableCount,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <MaterialCard className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Box align="center" py={2}>
          <Typography>
            {!foundAvailability && "TurboVax has not detected availability"}
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
            label={`Show ${unavailableCount} unavailable sites`}
          />
        </Box>
      </CardContent>
    </MaterialCard>
  );
}
