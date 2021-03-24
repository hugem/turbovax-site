import React from "react";
import Box from "@material-ui/core/Box";
import SiteCard from "./cards/SiteCard";

export default function AppointmentList({ sites }) {
  return (
    <Box>
      {sites.map((site) => (
        <SiteCard {...site} key={site.id} />
      ))}
    </Box>
  );
}
