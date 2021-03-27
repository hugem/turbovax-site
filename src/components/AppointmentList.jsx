import React from "react";
import Box from "@material-ui/core/Box";
import SiteCard from "./cards/SiteCard";

export default function AppointmentList({ sites, hidePharmacies }) {
  return (
    <Box>
      {sites.map((site) =>
        hidePharmacies && site.type === "pharmacy" ? null : (
          <SiteCard {...site} key={site.id} />
        )
      )}
    </Box>
  );
}
