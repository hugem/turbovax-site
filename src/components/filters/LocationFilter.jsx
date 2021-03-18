/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 500,
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
  { name: "Upstate", region: "Other" },
];

export default function LocationFilter({ enabledFilters, setFilter }) {
  const classes = useStyles();

  const defaultValue = areas.filter((area) => {
    return enabledFilters.includes(area.name.toLowerCase());
  });

  console.log(defaultValue);

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={areas}
        onChange={(event, newValue) => {
          setFilter(newValue);
        }}
        getOptionLabel={(option) => option.name}
        groupBy={(option) => option.region}
        value={defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter by region"
            placeholder="Queens (the best boro in NYC)"
          />
        )}
      />
    </div>
  );
}
