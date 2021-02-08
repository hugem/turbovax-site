import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <Hidden xsDown>
        <Box m={2}>
          <Typography
            variant="h3"
            component="h1"
            className={`${classes.title} header-text`}
          >
            TurboVax
          </Typography>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Typography
          variant="h4"
          component="h1"
          className={`${classes.title} header-text`}
        >
          TurboVax
        </Typography>
      </Hidden>
    </header>
  );
}
