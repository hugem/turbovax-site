import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="info">
        <b>Update (4/9):</b> The Vax4NYC bot is{" "}
        <Link
          href="https://twitter.com/turbovax/status/1380511401660325889"
          underline="always"
        >
          down
        </Link>
        . In the interim, see the{" "}
        <Link component={RouterLink} to="/resources" underline="always">
          resources page
        </Link>{" "}
        for tips on how to optimize your search. Residents 75+ and a plus one
        can walk up to{" "}
        <Link
          href="https://twitter.com/jbray1027/status/1379608572825309184"
          underline="always"
        >
          one of 26
        </Link>{" "}
        vax sites to be vaccinated without appointment.
      </MaterialAlert>
      {/* Note that it is always difficult to find
        appointments during the first few days of a new eligiblity window. */}
      {/* <MaterialAlert severity="info">
        <b>Update (3/23):</b> NYS has{" "}
        <Link
          target="_blank"
          underline="always"
          href="https://gothamist.com/news/starting-tuesday-new-yorkers-age-50-will-be-eligible-covid-vaccines"
          rel="noreferrer"
        >
          expanded eligiblity
        </Link>{" "}
        to include those aged 50+. Pharmacies are{" "}
        <Link
          underline="always"
          target="_blank"
          href="https://twitter.com/mayakauf/status/1374056610688086018"
          rel="noreferrer"
        >
          included in this expansion
        </Link>{" "}
        (educators and those with underlying conditions are also pharmacy
        eligible).
      </MaterialAlert> */}
    </Box>
  );
}
