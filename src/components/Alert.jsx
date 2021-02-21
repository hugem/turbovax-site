import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={5}>
      <MaterialAlert severity="info">
        <b>Update (2/19 9:38AM):</b>{" "}
        {/* <Link
          target="_blank"
          href="https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers"
          rel="noreferrer"
        >
          NYC H+H
        </Link>{" "} */}
      </MaterialAlert>
    </Box>
  );
}
