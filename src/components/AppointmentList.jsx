import React from "react";
import Box from "@material-ui/core/Box";
import SiteCard from "./cards/SiteCard";
import ShowAllSitesCard from "./cards/ShowAllSitesCard";

const SHOW_SITE_LIMIT = 25;

export default function AppointmentList({
  sites,
  hidePharmacies,
  showAllSitesButton,
  showAllSites,
  useSiteLimit,
  handleShowAllSiteClick,
}) {
  return (
    <Box>
      {sites.map(function (site, index) {
        if (useSiteLimit && !showAllSites && index > SHOW_SITE_LIMIT) {
          return null;
        }

        return hidePharmacies && site.type === "pharmacy" ? null : (
          <SiteCard {...site} key={site.id} />
        );
      })}
      {showAllSitesButton && !showAllSites && (
        <ShowAllSitesCard handleShowAllSiteClick={handleShowAllSiteClick} />
      )}
    </Box>
  );
}
