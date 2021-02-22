import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import { useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    fontSize: "1.2rem",
  },
  appointmentText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  card: {
    marginBottom: "1rem",
  },
  reserveButton: {
    width: "100%",
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  cardContent: {
    paddingBottom: "16px!important",
  },
  lastAvailableAtLabel: {
    lineHeight: "initial",
    fontSize: ".75rem",
  },
  lastAvailableAt: {
    marginTop: ".75rem",
    fontSize: ".8rem",
    textAlign: "center",
  },
}));

export default function Card({
  count,
  siteName,
  portalName,
  lastAvailableAt,
  url,
  appointments,
  isAvailable,
  area,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const theme = useTheme();

  const appointmentsWord = useMediaQuery(theme.breakpoints.up("sm"))
    ? "appointments"
    : "appts";
  const lastUpdatedClasses = useMediaQuery(theme.breakpoints.up("sm"))
    ? {
        direction: "column",
        justify: "flex-start",
        alignItems: "flex-start",
      }
    : {
        justify: "space-between",
      };

  return (
    <MaterialCard className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1} display="flex">
          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={9}
            className={classes.column}
          >
            <Grid xs={12} item>
              <Typography variant="h6" component="h3" className={classes.title}>
                {siteName}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Chip
                size={"small"}
                color="primary"
                variant="outlined"
                className={classes.chip}
                label={portalName}
              />
              <Chip
                size={"small"}
                color="primary"
                variant="outlined"
                className={classes.chip}
                label={area}
              />
              {isAvailable && (
                <Chip
                  size={"small"}
                  color="primary"
                  variant="outlined"
                  className={classes.chip}
                  label={`${count.toLocaleString()} ${appointmentsWord}`}
                />
              )}
            </Grid>
            {isAvailable && (
              <Grid item xs={12}>
                {appointments.map((appointment) => (
                  <Typography className={classes.appointmentText}>
                    {appointment}
                  </Typography>
                ))}
              </Grid>
            )}
          </Grid>
          <Hidden xsDown>
            <Grid
              spacing={0}
              container
              item
              xs={12}
              sm={3}
              direction="column"
              justify="flex-start"
            >
              <Grid item>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.reserveButton}
                  disabled={!isAvailable}
                  href={url}
                  target={"_blank"}
                >
                  {isAvailable ? "Reserve" : "No Availability"}
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.lastAvailableAt}>
                  Available <Moment fromNow={true}>{lastAvailableAt}</Moment>
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid
              spacing={0}
              container
              item
              xs={12}
              sm={3}
              direction="column"
              justify="flex-start"
            >
              <Grid item>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.reserveButton}
                  disabled={!isAvailable}
                  href={url}
                  target={"_blank"}
                >
                  {isAvailable ? "Reserve" : "No Availability"}
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.lastAvailableAt}>
                  Available <Moment fromNow={true}>{lastAvailableAt}</Moment>
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </CardContent>
    </MaterialCard>
  );
}
