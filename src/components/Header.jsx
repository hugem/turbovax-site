import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MaterialLink from "@material-ui/core/Link";
import logo from "../images/logo.png";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    // margin: "1rem",
  },
  a: {
    //   // textDecoration: "none",
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
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="">
            <img className={classes.logo} src={logo} alt="TurboVax logo" />
          </Link>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <nav style={style}>
            <ul className={classes.nav}>
              <li className={classes.li}>
                <Link to="" className={classes.a}>
                  <Button>Home</Button>
                </Link>
              </li>
              <li className={classes.li}>
                <Link to="/about" className={classes.a}>
                  <Button>About</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <Box align="center"></Box>
    </header>
  );
}
