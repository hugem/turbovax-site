import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="info">
        <b>Update (4/1):</b> Both NYC/NYS have not yet released meaningful
        amounts of availability since increasing eligiblity to 30+. Follow the{" "}
        <Link
          target="_blank"
          underline="always"
          href="https://twitter.com/turbovax"
          rel="noreferrer"
        >
          twitter account
        </Link>{" "}
        to be notified when it happens.{" "}
        <Link
          target="_blank"
          underline="always"
          href="https://www.cvs.com/immunizations/covid-19-vaccine?icid=cvs-home-hero1-link2-coronavirus-vaccine"
          rel="noreferrer"
        >
          CVS
        </Link>{" "}
        tends to release new availability around 12–1AM ET.
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
