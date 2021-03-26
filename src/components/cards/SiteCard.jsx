import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Moment from "react-moment";
import Pluralize from "react-pluralize";
import { useTheme } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  details: {
    fontSize: ".85em",
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
  cardContent: {
    paddingBottom: "16px!important",
  },
  location: {
    marginLeft: "8px",
  },
  topComponent: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0!important",
      paddingRight: "0!important",
    },
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
}));

export function TitleRow({ siteName, area, classes }) {
  return (
    <Box className={classes.titleRow}>
      <Typography inline variant="h6" component="h3" display="inline">
        {siteName}
      </Typography>
      <Chip
        size={"small"}
        color="primary"
        variant="outlined"
        label={area}
        className={classes.location}
      />
    </Box>
  );
}

export function DetailsRowWithGrid({
  portalName,
  portalShortName,
  isAvailable,
  count,
  showPortalName,
  classes,
  lastAvailableAt,
}) {
  const theme = useTheme();
  let components = [];

  const portalNameToUse = useMediaQuery(theme.breakpoints.up("sm"))
    ? portalName
    : portalShortName || portalName;

  const appointmentWord = useMediaQuery(theme.breakpoints.up("sm"))
    ? "appointment"
    : "appt";

  if (showPortalName) {
    components.push(portalNameToUse);
  }

  if (showPortalName || count > 0) {
    components.push(
      <span>
        {count.toLocaleString()}{" "}
        <Pluralize singular={appointmentWord} count={count} showCount={false} />
      </span>
    );
  }

  if (lastAvailableAt !== null) {
    const lastAvailableWord = isAvailable ? "checked" : "available";

    components.push(
      <span>
        {lastAvailableWord}{" "}
        {/* <Moment fromNow={true} parse="YYYY-MM-DD HH:mm"> */}
        <Moment fromNow={true}>{lastAvailableAt}</Moment>
      </span>
    );
  }

  if (components.length === 0) {
    return null;
  }

  return (
    <Grid xs={12} className={classes.topComponent} item>
      <Typography className={classes.details} display="">
        {components.map(function (item, index) {
          const isLastElement = index === components.length - 1;
          return (
            <span key={index}>
              {item}
              {!isLastElement && " · "}
            </span>
          );
        })}
      </Typography>
    </Grid>
  );
}

export default function SiteCard({
  count,
  siteName,
  portalName,
  portalShortName,
  lastAvailableAt,
  url,
  showPortalName,
  appointments,
  isAvailable,
  area,
  formattedAddress,
  metadata,
}) {
  const classes = useStyles();

  const showAppointments =
    isAvailable && appointments.length > 0 && appointments[0] !== "";

  return (
    <MaterialCard className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Grid justify="space-around" container spacing={2} display="flex">
          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={9}
            className={classes.column}
          >
            <Grid xs={12} className={classes.topComponent} item>
              <TitleRow {...{ siteName, area, classes }} />
            </Grid>

            <DetailsRowWithGrid
              {...{
                portalName,
                portalShortName,
                isAvailable,
                count,
                showPortalName,
                classes,
                lastAvailableAt,
              }}
            />
            {formattedAddress && (
              <Grid xs={12} className={classes.topComponent} item>
                <Typography className={classes.details}>
                  <LocationOnIcon fontSize="inherit" />{" "}
                  <Link
                    underline="always"
                    target="_blank"
                    href={`https://www.google.com/maps/place/${formattedAddress}`}
                    rel="noreferrer"
                  >
                    {formattedAddress}
                  </Link>
                </Typography>
              </Grid>
            )}
            {showAppointments && (
              <Grid xs={12} className={classes.topComponent} item>
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
                  {isAvailable ? "Reserve" : "Unavailable"}
                </Button>
              </Grid>
              {metadata && (
                <Grid item align="center">
                  <Box mt={1}>
                    <Typography className={classes.details}>
                      <Link
                        target="_blank"
                        href={metadata.url}
                        rel="noreferrer"
                      >
                        {metadata.notes}
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              )}
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
                  {isAvailable ? "Reserve" : "Unavailable"}
                </Button>
              </Grid>
              {metadata && (
                <Grid item align="center">
                  <Box mt={1}>
                    <Typography className={classes.details}>
                      <Link
                        target="_blank"
                        href={metadata.url}
                        rel="noreferrer"
                      >
                        {metadata.notes}
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Hidden>
        </Grid>
      </CardContent>
    </MaterialCard>
  );
}
