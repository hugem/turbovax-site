import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="warning">
        <b>Update (4/13):</b> Due to J&J pause, NYS is{" "}
        <Link
          href="https://twitter.com/JonCampbellGAN/status/1381956817987776512"
          underline="always"
          target="_blank"
          rel="noreferrer"
        >
          switching J&J appointments
        </Link>{" "}
        to Pfizer. NYC will{" "}
        <Link
          href="https://twitter.com/migold/status/1381978554536198144"
          underline="always"
          target="_blank"
          rel="noreferrer"
        >
          reschedule J&J appointments
        </Link>{" "}
        with Pfizer/Moderna. Use{" "}
        <Link
          href="https://vaccinefinder.nyc.gov"
          underline="always"
          target="_blank"
          rel="noreferrer"
        >
          NYC Vaccine Finder
        </Link>{" "}
        to determine which vaccine is offered at a given location.
      </MaterialAlert>
      {/* Note that it is always difficult to find
        appointments during the first few days of a new eligiblity window. */}
      {/* <MaterialAlert severity="info">
        <b>Update (3/23):</b> NYS has{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          underline="always"
          href="https://gothamist.com/news/starting-tuesday-new-yorkers-age-50-will-be-eligible-covid-vaccines"
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
