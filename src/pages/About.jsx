import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { asPage } from "./../helpers/hoc";
import StatusTable from "./../components/StatusTable";

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
      <section class="about-section" id="supported-websites">
        <h2 class="header-text">Supported Websites</h2>
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
      </section>
      <section class="about-section" id="contact-us">
        <h2 class="header-text">Contact Us</h2>
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
      </section>
      <section class="about-section" id="special-thanks">
        <h2 class="header-text">Special Thanks</h2>
        <Typography>
          Thanks to Kelley for coming up with the name. Thanks to Yu who fed me
          (and the cat) while I was heads-down on this for an entire weekend!
        </Typography>
      </section>
    </div>
  );
}

export default asPage(About);
