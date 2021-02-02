import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import StatusTable from "./../components/StatusTable";

export default function About() {
  return (
    <div>
      <Typography>
        TurboVax is a{" "}
        <Link target="_blank" href="https://twitter.com/turbovax">
          Twitter bot (@turbovax)
        </Link>{" "}
        that tweets the latest NYC vaccine appointments. Appointments are also
        published to this page in real-time.
      </Typography>
      <ul>
        <li>
          <Typography>
            <Link href="#supported-websites">Supported Websites</Link>
          </Typography>
        </li>
        <li>
          <Typography>
            <Link href="#faq">Frequently Asked Questions</Link>
          </Typography>
        </li>
        <li>
          <Typography>
            <Link href="#contact-us">Contact Us</Link>
          </Typography>
        </li>
        <li>
          <Typography>
            <Link href="#special-thanks">Special Thanks</Link>
          </Typography>
        </li>
      </ul>
      <section class="about-section" id="supported-websites">
        <h2 class="header-text">Supported Websites</h2>
        <Typography>
          We currently support 3 major government vaccine websites that handle
          reservations for 42 vaccine administration sites.
        </Typography>
        <br></br>
        <StatusTable />
      </section>
      <section class="about-section" id="faq">
        <h2 class="header-text">Frequently Asked Questions</h2>
        <Box marginBottom={4}>
          <Typography>
            <strong>How do I sign up for a vaccine in NYC?</strong>
          </Typography>
          <Typography>
            Please refer to the{" "}
            <Link
              href="https://www.nytimes.com/article/nyc-vaccine-shot.html"
              target="_blank"
            >
              <em>New York Times</em>
            </Link>{" "}
            and{" "}
            <Link
              href="https://gothamist.com/news/new-york-city-vaccine-explainer"
              target="_blank"
            >
              Gothamist
            </Link>{" "}
            guides for general questions about the process.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography>
            <strong>What can TurboVax do? What can't it do?</strong>
          </Typography>
          <Typography>
            Simply put: TurboVax queries vaccine scheduling websites to find
            available appointment slots. It <u>cannot</u>
            book appointments on your behalf.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography>
            <strong>Why did you build TurboVax?</strong>
          </Typography>
          <Typography>
            The existing vaccine scheduling system is complicated. Existing
            websites don't 1) make it easy to search for appointments or 2)
            notify people eligible groups when appointments do open up. By
            publishing open appointment slots on Twitter, we hope to give New
            Yorkers better odds at snagging an appointment.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography>
            <strong>
              Why couldn't I find the appointment that you tweeted?
            </strong>
          </Typography>
          <Typography>
            To be clear: it will be hard to find any appointment—with or without
            the tool. Availability is limited and demand is high. At this very
            moment, there are probably hundreds (if not thousands) of others
            looking for appointments on the very same websites as you are. Open
            appointments are often snapped up in less than a minute.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography>
            <strong>How can I set myself up for success?</strong>
          </Typography>
          <Typography>
            <Typography>
              Every second matters. Login and pre-fill all required forms, so
              that you are ready to hit the "find availability" step at a
              moment's notice.
            </Typography>
            <br></br>
            <Typography>
              <u>
                <a
                  href="https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers"
                  target="_blank"
                >
                  For the NYC H+H website
                </a>
              </u>
              : Fill out your data. To check availability, select
              <code>I, [First Name] [Last Name]</code> checkbox. If no
              availability, unselect and reselect the checkbox to quickly
              recheck availability.
            </Typography>
            <Typography>
              <u>
                <a href="https://vaccinepod.nyc.gov" target="_blank">
                  For the NYC Vaccine Hub website
                </a>
              </u>
              : Fill out your data until you are at Step 6. To check
              availability, select the relevant administration site and date. If
              no availability, click <code>Previous</code> to recheck
              availability at another site.
            </Typography>
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography>
            <strong>How reliable is TurboVax?</strong>
          </Typography>
          <Typography>
            Unclear! This is currently just some code running on some guy's
            laptop—anything as much as a wifi outage could knock it out. We also
            do not have any special access to proprietary data; our work could
            be undone anytime if authorities want to shut this down.
          </Typography>
        </Box>
      </section>
      <section class="about-section" id="contact-us">
        <h2 class="header-text">Contact Us</h2>
        <Typography>
          This project is maintained by{" "}
          <Link href="https://www.hugema.com">Huge Ma</Link>, who can be reached
          at <Link href="mailto:huge@turbovax.info">huge@turbovax.info</Link>
        </Typography>
      </section>
      <section class="about-section" id="special-thanks">
        <h2 class="header-text">Special Thanks</h2>
        <Typography>
          Thanks to Kelley coming up with the name. Thanks to Yu who fed me (and
          the cat) while I was heads-down on this for an entire weekend!
        </Typography>
      </section>
    </div>
  );
}
