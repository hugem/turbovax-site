import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import MaterialLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Header } from "./components/index";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "800px",
    padding: "1rem",
    margin: "0 auto",
  },
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
  footer: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Router>
        <Nav />
        <Footer />
      </Router>
    </div>
  );
}

function Nav() {
  const classes = useStyles();
  return (
    <nav>
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
      </Switch>
    </nav>
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
