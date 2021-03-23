/* eslint-disable no-use-before-define */
import React from "react";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    maxWidth: "500px",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

const areas = [
  { name: "Bronx", region: "New York City" },
  { name: "Brooklyn", region: "New York City" },
  { name: "Manhattan", region: "New York City" },
  { name: "Queens", region: "New York City" },
  { name: "Staten Island", region: "New York City" },
  { name: "Long Island", region: "Other" },
  { name: "Mid-Hudson", region: "Other" },
];

export default function LocationFilter({ filters, handleFilterChange }) {
  const classes = useStyles();

  const defaultValue = areas.filter((area) => {
    return filters.includes(area.name.toLowerCase());
  });

  return (
    <Box p={2} className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={areas}
        onChange={(event, newValue) => {
          handleFilterChange(newValue);
        }}
        getOptionLabel={(option) => option.name}
        groupBy={(option) => option.region}
        value={defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter by borough"
            placeholder="Queens..."
          />
        )}
      />
    </Box>
  );
}
