import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={5}>
      <MaterialAlert severity="info">
        <b>Update (2/15 9:38AM):</b>{" "}
        <Link
          target="_blank"
          href="https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers"
          rel="noreferrer"
        >
          NYC H+H
        </Link>{" "}
        bot is now back online.{" "}
        <Link
          target="_blank"
          href="https://am-i-eligible.covid19vaccine.health.ny.gov/"
          rel="noreferrer"
        >
          NYS Dept. of Health
        </Link>{" "}
        bot remains offline. People{" "}
        <Link
          target="_blank"
          href="https://twitter.com/MarkLevineNYC/status/1360714450815352833"
          rel="noreferrer"
        >
          aged 65+
        </Link>{" "}
        can book appointments at pharmacies.
      </MaterialAlert>
    </Box>
  );
}
