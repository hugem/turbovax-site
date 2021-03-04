import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Alert() {
  return (
    <Box my={5}>
      <MaterialAlert severity="info">
        <b>Update (3/1 12PM):</b> TurboVax is back online. Please take a moment
        to educate yourself on{" "}
        <Link
          target="_blank"
          href="https://twitter.com/turbovax/status/1365713333287079953"
          rel="noreferrer"
        >
          anti-Asian hate
        </Link>{" "}
        and what you can do to help end it.
      </MaterialAlert>
    </Box>
  );
}
