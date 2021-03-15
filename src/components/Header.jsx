import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.png";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import HamburgerMenu from "./header/HamburgerLinks";
import MenuLinks from "./header/MenuLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  a: {
    all: "unset",
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "125px",
    },
    maxWidth: "175px",
    width: "100%",
  },
}));

export default function Header() {
  const theme = useTheme();
  const classes = useStyles();
  const logoPadding = useMediaQuery(theme.breakpoints.up("sm")) ? 2 : 0;

  const [menuEnabled, setMenuEnabled] = React.useState(null);

  const handleClick = (event) => {
    setMenuEnabled(!Boolean(menuEnabled));
  };

  return (
    <header className={classes.root}>
      <Container maxWidth="md">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar display="flex" disableGutters={true}>
            <Box className={classes.title}>
              <Box py={logoPadding}>
                <Link to="">
                  <img
                    className={classes.logo}
                    src={logo}
                    alt="TurboVax logo"
                  />
                </Link>
              </Box>
            </Box>
            <Hidden only="xs">
              <MenuLinks />
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Container>
      <Hidden smUp>
        <Divider />
        {menuEnabled && <HamburgerMenu />}
      </Hidden>
    </header>
  );
}
