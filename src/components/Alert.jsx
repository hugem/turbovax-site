import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="info">
        <b>Update (3/26):</b> We are now testing pharmacy availability from{" "}
        <Link
          target="_blank"
          underline="always"
          href="https://www.vaccinespotter.org/"
          rel="noreferrer"
        >
          Vaccine Spotter
        </Link>
        . Please note that data may be out of date while we work out the kinks.{" "}
        Educators, 50+, and those underlying conditions are pharmacy-eligible.
      </MaterialAlert>
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
