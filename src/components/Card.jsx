import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "1rem",
  },
  reserveButton: {
    width: "100%",
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Card({
  siteName,
  portalName,
  updatedAt,
  url,
  appointments,
  isAvailable,
  area,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <MaterialCard className={classes.card}>
      <CardContent>
        <Grid container spacing={2} display="flex">
          <Grid item xs={12} sm={6} className={classes.column}>
            <Typography variant="h5" component="h3">
              {siteName}
            </Typography>
            <Chip
              size={"small"}
              color="primary"
              variant="outlined"
              lassName={classes.chip}
              label={portalName}
            />
            <Chip
              size={"small"}
              color="primary"
              variant="outlined"
              className={classes.chip}
              label={area}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Hidden smUp>
              <Typography variant="overline" display={"inline"}>
                Updated:
              </Typography>
            </Hidden>
            <Typography variant="overline" display={"inline"}>
              <Moment fromNow={true}>{updatedAt}</Moment>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={3}>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                className={classes.reserveButton}
                disabled={!isAvailable}
                href={url}
                target={"_blank"}
              >
                {isAvailable ? "Reserve" : "No Appts"}
              </Button>
            </Grid>
          </Hidden>
          <Grid item>
            {isAvailable ? (
              <Typography>{appointments}</Typography>
            ) : (
              <Typography>No availability at this time</Typography>
            )}
          </Grid>
          <Hidden smUp>
            <Grid item xs={12} sm={3}>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                className={classes.reserveButton}
                disabled={!isAvailable}
                href={url}
                target={"_blank"}
              >
                {isAvailable ? "Reserve" : "No Appts"}
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </CardContent>
    </MaterialCard>
  );
}
