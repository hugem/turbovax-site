import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";
import FilterButton from "./filters/FilterButton";
import { withRouter } from "react-router-dom";

import * as QueryString from "query-string";
import {
  Summary,
  AppointmentList,
  FilterCard,
  ShowUnavailableCard,
} from "./index";

import { LOCATION_FILTERS_BY_VALUE } from "./../constants/filters";

class BaseAppointments extends React.Component {
  state = {
    availableSites: [],
    unavailableSites: [],
    showUnavailable: false,
    lastUpdatedAt: null,
    filters: [],
  };

  mapPortalByKey(portals) {
    let toReturn = {};

    portals.forEach((item) => (toReturn[item.key] = item));

    return toReturn;
  }

  mapLocationToVars(props, portals) {
    const portal = portals[props.portal];

    return {
      id: props.id,
      appointments: (props.appointments.summary || "").split(";"),
      area: props.area,
      count: props.appointments.count,
      isActive: props.active,
      isAvailable: props.available,
      lastAvailableAt: props.last_available_at,
      portalName: portal.name,
      portalShortName: portal.short_name,
      siteName: props.name,
      updatedAt: props.updated_at,
      url: portal.url,
      showPortalName: portal.show_name_in_card,
      formattedAddress: props.formatted_address,
      metadata: props.metadata,
    };
  }

  handleShowAvailabilityChange = (event) => {
    const newShowUnavailableValue = !this.state.showUnavailable;

    localStorage.setItem("showUnavailable", newShowUnavailableValue);

    this.setState({
      ...this.state,
      showUnavailable: newShowUnavailableValue,
    });
  };

  handleFilterClear = () => {
    var url = new URL(window.location.href);
    this.props.history.push(
      {
        state: this.state,
      },
      this.state
    );

    this.setState({
      ...this.state,
      filters: [],
    });
  };

  handleFilterChange = (filterObjects) => {
    var lowerCaseFilters = filterObjects.map((filter) => filter.value);

    this.props.history.push(
      {
        state: this.state,
        // search: "?" + searchParams.toString(),
        search:
          "?" + new URLSearchParams({ region: lowerCaseFilters }).toString(),
      },
      this.state
    );

    // console.log(lowerCaseFilters)
    // console.log(filterObjects)

    this.setState({
      ...this.state,
      filters: filterObjects,
    });
  };

  componentDidMount() {
    const showUnavailable = localStorage.getItem("showUnavailable") == "true";
    const regionString = QueryString.parse(window.location.search).region || "";

    const filterArray = regionString
      .split(",")
      .filter((string) => string !== "")
      .map((filter) => LOCATION_FILTERS_BY_VALUE[filter.toLowerCase()]);

    this.setState({ ...this.state, filters: filterArray });

    axios
      .get(`https://turbovax.global.ssl.fastly.net/dashboard`)
      // .get(`http://localhost:3000/dashboard`)
      .then((res) => {
        const data = res.data;

        const portalsByKey = this.mapPortalByKey(data.portals);
        // const portalsByKey = data.portals.map((portal) => this.mapPortalByKey(portal));

        const mappedSites = data.locations
          .map((list) => this.mapLocationToVars(list, portalsByKey))
          .filter((site) => site.isActive);

        const sortedSites = mappedSites.sort((a, b) => {
          if (a.lastAvailableAt > b.lastAvailableAt) {
            return -1;
          }
          if (a.lastAvailableAt < b.lastAvailableAt) {
            return 1;
          }
          return 0;
        });

        const availableSites = sortedSites.filter((site) => site.isAvailable);
        const unavailableSites = sortedSites.filter(
          (site) => !site.isAvailable
        );

        const updatedAtArray = sortedSites.map((site) => site.updatedAt);

        const lastUpdatedAt = updatedAtArray.sort().reverse()[0];

        this.setState({
          availableSites: availableSites,
          unavailableSites: unavailableSites,
          showUnavailable,
          lastUpdatedAt,
          // totalCount,
          // portals,
        });
      });
  }

  shouldComponentUpdate(prevProps, prevState, snapshot) {
    const regionString = QueryString.parse(window.location.search).region || "";
    const filterArray = regionString
      .split(",")
      .filter((string) => string !== "")
      .map((filter) => LOCATION_FILTERS_BY_VALUE[filter.toLowerCase()]);

    const intersection = filterArray && prevState.filters;

    if (intersection.length !== filterArray.length) {
      this.setState({ ...this.state, filters: filterArray });
    }

    return true;
  }

  render() {
    const filterEnabled = this.state.filters.length > 0;

    const filterNames = this.state.filters.map((filter) => filter.name);

    const activeAvailableSites = filterEnabled
      ? this.state.availableSites.filter(
          (site) => filterNames.indexOf(site.area) >= 0
        )
      : this.state.availableSites;

    const activeUnavailableSites = filterEnabled
      ? this.state.unavailableSites.filter(
          (site) => filterNames.indexOf(site.area) >= 0
        )
      : this.state.unavailableSites;

    // const filterEnabled = this.state.filters.length > 0;
    // const activeAvailableSites = this.state.availableSites;

    // const activeUnavailableSites = this.state.unavailableSites;

    const totalCount = activeAvailableSites
      .map((site) => site.count)
      .reduce((a, b) => a + b, 0);

    const foundAvailability = activeAvailableSites.length > 0;

    if (totalCount > 0) {
      document.title = `(${totalCount.toLocaleString()}) TurboVax`;
    }

    return (
      <div>
        <Box>
          <Summary
            lastUpdatedAt={this.state.lastUpdatedAt}
            foundAvailability={foundAvailability}
            appointmentCount={totalCount}
            siteCount={activeAvailableSites.length}
          />
        </Box>
        <Box align="right" mt={6} mb={2}>
          <FilterButton
            handleFilterClear={this.handleFilterClear}
            handleFilterChange={this.handleFilterChange}
            filters={this.state.filters}
          />
        </Box>
        <Box>
          <AppointmentList sites={activeAvailableSites} />
          <ShowUnavailableCard
            filters={this.state.filters}
            foundAvailability={foundAvailability}
            unavailableCount={activeUnavailableSites.length}
            handleShowAvailabilityChange={this.handleShowAvailabilityChange}
            showUnavailable={this.state.showUnavailable}
          />
          {this.state.showUnavailable && (
            <AppointmentList sites={activeUnavailableSites} />
          )}
        </Box>
      </div>
    );
  }
}

export default withRouter(BaseAppointments);
