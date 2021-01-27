import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
  reserveButton: {
    width: "100%",
  },
});

export default function Card({
  siteName,
  portalName,
  updatedAt,
  url,
  appointments,
  isAvailable,
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
            <Typography className={classes.pos} color="textSecondary">
              {portalName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Hidden smUp>
              <Typography variant="overline" display={"inline"}>
                Updated At:
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
