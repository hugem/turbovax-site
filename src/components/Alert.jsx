import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={5}>
      <MaterialAlert severity="info">
        <b>Update (2/12 8:25AM):</b> Many pharmacies (Rite Aid, Duane Reade and
        Walgreens) are now scheduling appointments for those aged 65+. See the{" "}
        <Link
          target="_blank"
          href="https://vaccinefinder.nyc.gov/"
          rel="noreferrer"
        >
          NYC Vaccine Finder
        </Link>{" "}
        to find your local location.
      </MaterialAlert>
    </Box>
  );
}
