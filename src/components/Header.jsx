import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MaterialLink from "@material-ui/core/Link";
import logo from "../images/logo.png";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  nav: {
    textAlign: "center",
    padding: 0,
  },
  li: {
    display: "inline-block",
    margin: "1rem",
  },
  a: {
    // textDecoration: "none",
    all: "unset",
  },
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
  const theme = useTheme();

  const style = useMediaQuery(theme.breakpoints.up("sm"))
    ? { margin: "2rem 0" }
    : { margin: "1rem 0" };

  return (
    <header>
      <Box align="center">
        <Link to="">
          <img className={classes.logo} src={logo} alt="TurboVax logo" />
        </Link>
      </Box>
      <nav style={style}>
        <ul className={classes.nav}>
          <li className={classes.li}>
            <Link to="" className={classes.a}>
              <MaterialLink>Home</MaterialLink>
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/about" className={classes.a}>
              <MaterialLink>About</MaterialLink>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
