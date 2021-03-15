import React from "react";

import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

function MenuButton(props) {
  const style = {
    textTransform: "initial",
  };

  return (
    <Button style={style} color="primary" component={RouterLink} to={props.to}>
      {props.text}
    </Button>
  );
}

export default function MenuLinks(props) {
  return (
    <nav aria-label="dropdown nav menu">
      <MenuButton text="About" to="/about" />
      <MenuButton text="FAQ" to="/faq" />
      {/* <MenuButton text="Donate" to="/donate" /> */}
    </nav>
  );
}
