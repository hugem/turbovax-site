import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "150px",
    },
    maxWidth: "250px",
    width: "100%",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <Box align="center">
        <img class={classes.logo} src={logo} alt="TurboVax logo" />
      </Box>
    </header>
  );
}
