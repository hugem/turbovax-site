import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

export default function Summary({ leftComponent, rightComponent }) {
  const theme = useTheme();
  const hasAvailabilityClasses = useMediaQuery(theme.breakpoints.up("sm"))
    ? {}
    : { borderTop: 1, borderColor: "rgba(0, 0, 0, 0.12)" };

  return (
    <Box mb={2}>
      <Card variant="outlined">
        <Grid container align={"center"}>
          <Grid item xs={12} sm={6}>
            <Box p={2}>{leftComponent}</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2} {...hasAvailabilityClasses}>
              {rightComponent}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
