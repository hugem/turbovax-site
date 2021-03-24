export const LOCATION_FILTERS = [
  { name: "Bronx", value: "bronx", region: "New York City" },
  { name: "Brooklyn", value: "brooklyn", region: "New York City" },
  { name: "Manhattan", value: "manhattan", region: "New York City" },
  { name: "Queens", value: "queens", region: "New York City" },
  { name: "Staten Island", value: "staten_island", region: "New York City" },
  { name: "Long Island", value: "long_island", region: "Other" },
  { name: "Mid-Hudson", value: "mid_hudson", region: "Other" },
];

let locationFilterByValue = {};
LOCATION_FILTERS.forEach(function (filter) {
  locationFilterByValue[filter.value] = filter;
});

export const LOCATION_FILTERS_BY_VALUE = locationFilterByValue;
