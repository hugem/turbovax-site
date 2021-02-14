import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={5}>
      <MaterialAlert severity="info">
        <b>Update (2/14 10:43AM):</b> TurboVax has paused its NYS bot. Go
        directly to{" "}
        <Link
          target="_blank"
          href="https://am-i-eligible.covid19vaccine.health.ny.gov/"
          rel="noreferrer"
        >
          the state's website
        </Link>{" "}
        to find availability. Pharmacy appointments remain reserved{" "}
        <Link
          target="_blank"
          href="https://twitter.com/MarkLevineNYC/status/1360714450815352833"
          rel="noreferrer"
        >
          for those aged 65+ only
        </Link>
        .
      </MaterialAlert>
    </Box>
  );
}
