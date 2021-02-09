import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
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
    textDecoration: "none",
  },
  footer: {
    // padding: '3rem',
  },
  footerText: {
    fontSize: ".75rem",
    textAlign: "center",
    margin: "3rem 0",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

function Nav() {
  const classes = useStyles();
  return (
    <Router>
      <nav>
        <ul className={classes.nav}>
          <li className={classes.li}>
            <Link to="/" className={classes.a}>
              <Typography>Home</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/about" className={classes.a}>
              <Typography>About</Typography>
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
        </Switch>
      </nav>
    </Router>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerText}>2021 © TurboVax</Typography>
      <Typography className={classes.footerText}>
        This website is provided “as is” and your use or reliance on such
        materials are solely at your own risk. TurboVax expressly disclaims all
        implied warranty of any kind, and shall not be held responsible or
        liable, directly or indirectly, for any loss or damage caused or alleged
        to have been caused in any way whatsoever related to any advice,
        opinions, statements or other information displayed or distributed on
        the site. The content published on our site does not constitute any form
        of recommendation or medical advice.
      </Typography>
    </footer>
  );
}
