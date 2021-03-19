import React from "react";

// import LocationFilter from "../filters/LocationFilter";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import HeaderCard from "./HeaderCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const areas = [
  { name: "Bronx", region: "New York City" },
  { name: "Brooklyn", region: "New York City" },
  { name: "Manhattan", region: "New York City" },
  { name: "Queens", region: "New York City" },
  { name: "Staten Island", region: "New York City" },
  { name: "Long Island", region: "Other" },
  { name: "Upstate", region: "Other" },
];

export default function FilterCard({
  foundAvailability,
  showUnavailable,
  handleShowAvailabilityChange,
  unavailableCount,
  // filters
  handleFilterChange: setFilter,
  filters: enabledFilters,
}) {
  const defaultValue = areas.filter((area) => {
    return enabledFilters.includes(area.name.toLowerCase());
  });

  const leftComponent = (
    <Box py={1}>
      {/* <Typography>
        {!foundAvailability && "TurboVax has not detected availability"}
      </Typography>
      {!foundAvailability && <br />} */}

      <FormControlLabel
        labelPlacement="start"
        control={
          <Switch
            checked={showUnavailable}
            onChange={handleShowAvailabilityChange}
            name="showUnavailbleSites"
            color="primary"
          />
        }
        label={`Show ${unavailableCount} unavailable sites`}
      />
    </Box>
  );

  const rightComponent = (
    <Box px={0} maxWidth="20rem">
      <Autocomplete
        size="small"
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
            placeholder="Queens"
          />
        )}
      />
    </Box>
  );

  return (
    <HeaderCard leftComponent={leftComponent} rightComponent={rightComponent} />
  );
}
