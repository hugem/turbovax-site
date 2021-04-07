import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  listItemText: {
    "& span, & svg": {
      fontSize: ".9rem",
    },
  },
});

function ListItemLink(props) {
  const classes = useStyles();
  const { primary, to } = props;

  const CustomLink = (props) => <Link to={to} {...props} />;

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemText
          className={classes.listItemText}
          primary={primary}
          onClick={props.onClick}
        />
      </ListItem>
    </li>
  );
}

export default function HamburgerMenu(props) {
  return (
    <div>
      <List
        component="nav"
        aria-label="dropdown nav menu"
        disablePadding={true}
      >
        <ListItemLink onClick={props.onClick} to="/about" primary="About" />
        <Divider />
        <ListItemLink onClick={props.onClick} to="/faq" primary="FAQ" />
        <Divider />
        <ListItemLink
          onClick={props.onClick}
          to="/resources"
          primary="Resources"
        />
        <Divider />
        {/* <ListItemLink to="/donate" primary="Donate" />
        <Divider /> */}
      </List>
    </div>
  );
}
