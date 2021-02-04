import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  reserveButton: {
    width: "100%",
  },
});

export default function LabelCard() {
  const classes = useStyles();

  return (
    <Box>
      <CardContent className={`hide-small other`}>
        <Grid container spacing={2} display="flex">
          <Grid item xs={12} sm={6} className={classes.column}>
            <Typography variant="overline">Center/Portal</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="overline">Updated</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="overline">Link</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}
