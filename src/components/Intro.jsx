import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Intro() {
  return (
    <Box p={2}>
      <Typography>
        TurboVax finds the latest vaccine appointments from 40 city/state
        administration sites in NYC. There are two ways that you can use our
        tool:
      </Typography>
      <ol>
        <li>
          <Typography>
            Follow our Twitter account (
            <a
              target="_blank"
              href="https://twitter.com/turbovax"
              rel="noreferrer"
            >
              @turbovax
            </a>
            ) to be instantly notified when new appointments open up.
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
