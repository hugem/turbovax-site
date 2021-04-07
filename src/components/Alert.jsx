import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="info">
        <b>Update (4/7 2:56PM):</b> Few appointments released so far today. See
        the new{" "}
        <Link component={RouterLink} to="/resources" underline="always">
          Resources page
        </Link>{" "}
        for some tips on how to optimize your search.
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
