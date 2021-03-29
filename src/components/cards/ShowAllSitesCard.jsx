import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

export default function ShowAllSitesCard({ handleShowAllSiteClick }) {
  const classes = useStyles();
  return (
    <MaterialCard className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Box align="center" py={2}>
          <Typography>
            Showing all sites may result in slower performance
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowAllSiteClick}
            disableElevation
          >
            Show all sites
          </Button>
        </Box>
      </CardContent>
    </MaterialCard>
  );
}
