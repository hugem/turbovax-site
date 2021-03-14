import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  const { primary, to } = props;

  const CustomLink = (props) => <Link to={to} {...props} />;

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function HamburgerMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="nav menu">
        <ListItemLink to="/about" primary="About" />
        <Divider />
        <ListItemLink to="/donate" primary="Donate" />
        <Divider />
      </List>
    </div>
  );
}
