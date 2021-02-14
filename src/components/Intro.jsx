import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Intro() {
  const theme = useTheme();
  const usePadding = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box px={usePadding ? 3 : 0}>
      <Typography>
        TurboVax finds the latest appointments from 43 city and state-run
        vaccine sites in the NYC area.
      </Typography>
      <ol>
        <li>
          <Typography>
            Follow our Twitter (
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
            Refresh this page often. Appointments are published to this page in
            real-time.
          </Typography>
        </li>
      </ol>
      <Typography>
        Availability for local clinics/pharmacies can be found at{" "}
        <Link
          target="_blank"
          href="https://nycvaccinelist.com/"
          rel="noreferrer"
        >
          NYC Vaccine List
        </Link>
        . If you found TurboVax to be helpful, please consider making a donation
        to{" "}
        <Link
          target="_blank"
          href="https://www.welcometochinatown.com/"
          rel="noreferrer"
        >
          Welcome to Chinatown
        </Link>
        .
      </Typography>
    </Box>
  );
}
