import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
        <Grid container spacing={3} display="flex">
          <Grid item xs={12} sm={6} className={classes.column}>
            <Typography variant="h5" component="h2">
              {siteName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {portalName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="overline"
              display={"inline"}
              className={"show-small-inline"}
            >
              Updated:
            </Typography>
            <Typography variant="overline" display={"inline"}>
              <Moment fromNow={true}>{updatedAt}</Moment>
            </Typography>
          </Grid>
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
          <Grid item>
            {isAvailable ? (
              <Typography>appointments</Typography>
            ) : (
              <Typography>No availability</Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </MaterialCard>
  );
}

// return (
//     <MaterialCard className={classes.card}>
//       <CardContent>
//         <Grid container spacing={3} display="flex">
//           <Grid item xs={12} sm={5} order={5} className={classes.column}>
//             <Typography variant="h5" component="h2">
//               {siteName}
//             </Typography>
//             <Typography className={classes.pos} color="textSecondary">
//               {portalName}
//             </Typography>
//             <Typography variant="overline">Updated at: {updatedAt}</Typography>
//           </Grid>
//           <Grid item xs={12} sm={5}>
//             <Typography>{appointments}</Typography>
//           </Grid>
//           <Grid item xs={12} sm={2}>
//             <Button
//               size="medium"
//               variant="contained"
//               color="primary"
//               className={classes.reserveButton}
//               disabled={!isAvailable}
//               href={url}
//               target={"_blank"}
//             >
//               {isAvailable ? "Reserve" : "N/A"}
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </MaterialCard>
//   );
