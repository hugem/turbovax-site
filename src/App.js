import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Disclaimer from "./pages/Disclaimer";
import { Header } from "./components/index";
import { THEME } from "./constants/theme";

import MaterialLink from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

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
    all: "unset",
  },
  footer: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "150px",
    },
    maxWidth: "250px",
    width: "100%",
  },
}));

export default function App() {
  const theme = useTheme();
  const navMargin = useMediaQuery(theme.breakpoints.up("sm")) ? 5 : 3;

  return (
    <div>
      <ThemeProvider theme={THEME}>
        <Router>
          <Box mb={navMargin}>
            <Header />
          </Box>
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About pageName="About" />
              </Route>
              <Route path="/disclaimer">
                <Disclaimer />
              </Route>
              <Route path="/faq">
                <Faq pageName="Frequently Asked Questions" />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer align="center" className={classes.footer}>
      <Typography className={classes.footerText}>2021 © TurboVax</Typography>
      <br></br>
      <Typography>
        <Link to="/disclaimer" className={classes.a}>
          <MaterialLink>Disclaimer</MaterialLink>
        </Link>
      </Typography>
    </footer>
  );
}
