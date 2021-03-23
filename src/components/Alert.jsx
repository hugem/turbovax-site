import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={2}>
      <MaterialAlert severity="info">
        <b>Update (3/20):</b> Pharmacies are now free to vaccinate{" "}
        <Link
          target="_blank"
          href="https://twitter.com/turbovax/status/1373252610887716869"
          rel="noreferrer"
        >
          those with underlying conditions
        </Link>{" "}
        (in addition to the already-eligible educators, childcare workers and
        60+). Please see{" "}
        <Link
          target="_blank"
          href="https://vaccinefinder.nyc.gov/"
          rel="noreferrer"
        >
          NYC Vaccine Finder
        </Link>{" "}
        for real-time availability.
      </MaterialAlert>
    </Box>
  );
}
