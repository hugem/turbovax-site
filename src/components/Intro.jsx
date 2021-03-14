import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function ListItem(props) {
  const style = { marginBottom: ".25rem" };
  return (
    <li style={style}>
      <Typography>{props.children}</Typography>
    </li>
  );
}

export default function Intro() {
  const theme = useTheme();

  return (
    <Box style={{ maxWidth: "700px" }} my={5} mx="auto">
      <Typography>
        TurboVax finds appointments from government-run vaccine sites in the NYC
        area.
      </Typography>
      <ol>
        <ListItem>
          Follow our Twitter (
          <Link
            target="_blank"
            href="https://twitter.com/turbovax"
            rel="noreferrer"
          >
            @turbovax
          </Link>
          ) to be instantly notified when appointments open up.
        </ListItem>
        <ListItem>
          Refresh this page often. Appointments are published to this page in
          real-time.
        </ListItem>
        <ListItem>
          Educate yourself on{" "}
          <Link
            target="_blank"
            href="https://www.nytimes.com/2021/02/26/nyregion/asian-hate-crimes-attacks-ny.html"
            rel="noreferrer"
          >
            rising Asian Hate
          </Link>{" "}
          and how you can{" "}
          <Link
            target="_blank"
            href="https://stopaapihate.org/actnow/"
            rel="noreferrer"
          >
            help end it
          </Link>
          .
        </ListItem>
      </ol>
      <Typography>
        Availability for local clinics/pharmacies can be found at CDC's{" "}
        <Link
          target="_blank"
          href="https://vaccinefinder.org/"
          rel="noreferrer"
        >
          VaccineFinder
        </Link>{" "}
        or{" "}
        <Link
          target="_blank"
          href="https://nycvaccinelist.com/"
          rel="noreferrer"
        >
          NYC Vaccine List
        </Link>
        . If you found TurboVax to be helpful, consider making a donation to{" "}
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
