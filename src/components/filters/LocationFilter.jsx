/* eslint-disable no-use-before-define */
import React from "react";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { LOCATION_FILTERS } from "./../../constants/filters";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function LocationFilter({ filters, handleFilterChange }) {
  const classes = useStyles();

  return (
    <Box p={2} className={classes.root}>
      <Autocomplete
        multiple
        options={LOCATION_FILTERS}
        onChange={(event, newValue) => {
          handleFilterChange(newValue);
        }}
        getOptionLabel={(option) => option.name}
        groupBy={(option) => option.region}
        value={filters}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Filter by borough"
            placeholder="Queens..."
          />
        )}
      />
    </Box>
  );
}
