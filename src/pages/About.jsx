import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { asPage } from "./../helpers/hoc";
import StatusTable from "./../components/StatusTable";

function Section(props) {
  return (
    <Box my={6}>
      <Box mb={2}>
        <Typography variant="h4">{props.title}</Typography>
      </Box>
      <section>{props.children}</section>
    </Box>
  );
}

function About() {
  return (
    <div>
      <Typography>
        TurboVax is a{" "}
        <Link
          target="_blank"
          href="https://twitter.com/turbovax"
          rel="noreferrer"
        >
          Twitter bot (@turbovax)
        </Link>{" "}
        that tweets the latest NYC vaccine appointments. Appointments are also
        published to this page in real-time.
      </Typography>
      <Section title="Supported Websites">
        <Typography>
          We currently support 3 major government vaccine websites. Details for
          other administration sites can be found at{" "}
          <Link
            href="https://vaccinefinder.nyc.gov/"
            target="_blank"
            rel="noreferrer"
          >
            vaccinefinder.nyc.gov
          </Link>
          .
        </Typography>
        <br></br>
        <StatusTable />
      </Section>
      <Section title="Contact Us">
        <Typography>
          This project is maintained by{" "}
          <Link href="https://www.hugema.com" rel="noreferrer">
            Huge Ma
          </Link>
          , who can be reached at{" "}
          <Link href="mailto:huge@turbovax.info" rel="noreferrer">
            huge@turbovax.info
          </Link>
          .
        </Typography>
      </Section>
      <Section title="Special Thanks">
        <Typography>
          Thanks to Kelley for coming up with the name. Thanks to Yu who fed me
          (and the cat) while I was heads-down on this for an entire weekend!
        </Typography>
      </Section>
    </div>
  );
}

export default asPage(About);
