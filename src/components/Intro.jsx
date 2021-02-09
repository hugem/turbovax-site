import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Intro() {
  return (
    <Box px={2}>
      <Typography>
        TurboVax finds the latest vaccine appointments from 43 city and
        state-run administration sites in the NYC area. There are two ways that
        you can use our tool:
      </Typography>
      <ol>
        <li>
          <Typography>
            Follow our Twitter account (
            <Link
              target="_blank"
              href="https://twitter.com/turbovax"
              rel="noreferrer"
            >
              @turbovax
            </Link>
            ) to be instantly notified when appointments open up.
          </Typography>
        </li>
        <li>
          <Typography>
            Stay on this page and refresh often. Appointments are published to
            this page in real-time.
          </Typography>
        </li>
      </ol>
    </Box>
  );
}
