import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { Card } from "./index";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     // padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function AppointmentList({ sites }) {
  return (
    <Box>
      {sites.map((site, index) => (
        <Card {...site} key={index} />
      ))}
    </Box>
  );
}
