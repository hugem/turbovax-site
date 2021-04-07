import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { asPage } from "./../helpers/hoc";

const content = [
  {
    question: "General Tips (updated 4/7)",
    answer: (
      <Box>
        <Typography>
          It's not easy to get a vaccine in NYC—demand still exceeds supply.
          Some general tips:
        </Typography>
      </Box>
    ),
    items: [
      <Typography>
        Practice self-care. You probably won't get an appointment right away,
        and that's very normal.
      </Typography>,
      <Typography>
        Call independent pharmacies (see{" "}
        <Link href="#useful-website-and-twitter-accounts">links</Link> below)
      </Typography>,
      <Typography>
        Call <Link href="#book-by-phone">government hotlines</Link>
      </Typography>,
      <Typography>
        Understand{" "}
        <Link href="#release-cadence">appointment release cadences</Link> so you
        don't have to refresh all day
      </Typography>,
      <Typography>
        Don't be afraid to ask for{" "}
        <Link href="#appointment-booking-assistance">help</Link>
      </Typography>,
      <Typography>
        Wait, if you can afford to. There will be much more vaccine supply{" "}
        <Link
          href="https://www.bloomberg.com/graphics/covid-vaccine-tracker-global-distribution/"
          target="_blank"
          rel="noreferrer"
        >
          arriving in late April and May
        </Link>
      </Typography>,
    ],
  },
  {
    question: "Useful Website and Twitter accounts",
    items: [
      <Typography>
        <Link
          href="https://twitter.com/nycshotslots"
          target="_blank"
          rel="noreferrer"
        >
          @nycshotslots
        </Link>{" "}
        account tweets out vaccine openings around the city
      </Typography>,
      <Typography>
        Councilmember{" "}
        <Link
          href="https://twitter.com/MarkLevineNYC"
          target="_blank"
          rel="noreferrer"
        >
          @MarkLevineNYC
        </Link>{" "}
        shares useful news as Chair of NYC's Health Committee
      </Typography>,
      <Typography>
        <Link
          href="https://vaccinefinder.nyc.gov/"
          target="_blank"
          rel="noreferrer"
        >
          NYC Vaccine Finder
        </Link>{" "}
        is is a city-run directory of *all* vaccine sites in the city (real-time
        availability functionality is limited).
      </Typography>,
      <Typography>
        <Link
          href="https://vaccinefinder.org/"
          target="_blank"
          rel="noreferrer"
        >
          Vaccine Finder
        </Link>{" "}
        is a CDC-run directory of clinics and pharmacies.
      </Typography>,
      <Typography>
        <Link
          href="https://nycvaccinelist.com/"
          target="_blank"
          rel="noreferrer"
        >
          NYC Vaccine List
        </Link>
        {" and "}
        <Link
          href="https://www.vaccinespotter.org/NY/"
          target="_blank"
          rel="noreferrer"
        >
          Vaccine Spotter
        </Link>{" "}
        are two useful real-time aggregators for the New York area
      </Typography>,
    ],
  },
  {
    question: "Booking Guides",
    answer: (
      <Typography>
        It is not easy to navigate the myriad vaccine websites, here are some
        guides to familiarize yourself with the process.
      </Typography>
    ),
    items: [
      <Typography>
        <Link
          href="https://natanedelsburg.medium.com/a-guide-to-the-nyc-and-ny-state-covid-vaccine-scheduling-websites-bcb28283f5bc"
          target="_blank"
          rel="noreferrer"
        >
          Guide to the NYC/NYS Covid vaccine scheduling websites
        </Link>{" "}
        by Natan Edelsburg
      </Typography>,
      <Typography>
        <Link
          href="https://www.youtube.com/watch?v=9lxJYZXZTjQ"
          target="_blank"
          rel="noreferrer"
        >
          Tips and Tricks (video)
        </Link>{" "}
        from members of the Epicenter-NYC booking team
      </Typography>,
      <Typography>
        <Link
          href="https://docs.google.com/document/d/18GW5shE0CGDyXONitWkAcepaCGvcmbtoFkQOmcgfkPQ/edit"
          target="_blank"
          rel="noreferrer"
        >
          How to get a covid vaccine apt in NY
        </Link>{" "}
        by Talia
      </Typography>,
      <Typography>
        <Link
          href="https://documentedny.com/2021/02/11/guide-to-the-covid-19-vaccine-for-immigrants-in-new-york/"
          target="_blank"
          rel="noreferrer"
        >
          Covid-19 Vaccine Guide for Immigrants in New York
        </Link>{" "}
        (
        <Link
          href="https://docs.google.com/document/d/18GW5shE0CGDyXONitWkAcepaCGvcmbtoFkQOmcgfkPQ/edit"
          target="_blank"
          rel="noreferrer"
        >
          Spanish version
        </Link>
        ) by Documented NY
      </Typography>,
    ],
  },
  {
    question: "Appointment Booking Assistance",
    answer: (
      <Typography>
        Many volunteer organizations are helping other New Yorkers find
        appointments. This is how I got my own vaccine!
      </Typography>
    ),
    items: [
      <Typography>
        <Link
          href="https://airtable.com/shr7lRDaT8BroQKGk"
          target="_blank"
          rel="noreferrer"
        >
          Epicenter-NYC
        </Link>
      </Typography>,
      <Typography>
        <Link
          href="https://northbrooklynmutualaid.org/NBK-Vax"
          target="_blank"
          rel="noreferrer"
        >
          North Brooklyn Mutual Aid
        </Link>
      </Typography>,
      <Typography>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeAnUmgBxVRBoEMZ4mM-RdIgJaTeuyyDHUOhiK2Bi1yzzrjeA/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Cat + Tracy
        </Link>
      </Typography>,
      <Typography>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2cPObg9WhJS4X12AjcDdNKJeyQ3OhhMf_5uNIPj0Fs83vcg/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Brooklyn Vax Squad
        </Link>
      </Typography>,
      <Typography>
        <Link
          href="https://www.facebook.com/groups/1375750372771004/?ref=share"
          target="_blank"
          rel="noreferrer"
        >
          Covid Vaccine Help - New York (Facebook Group)
        </Link>
      </Typography>,
    ],
  },
  {
    question: "Release Cadence",
    answer: (
      <Typography>Note: that the below information is anecdotal.</Typography>
    ),
  },
  {
    question: "Book by phone",
    answer: (
      <Typography>
        This is a good option for people who have issues finding availability
        online. Some have also reported that these hotlines have access to
        appointments that are not released online.
      </Typography>
    ),
    items: [
      <Typography>New York City: 877-VAX-4NYC (877-829-4692)</Typography>,
      <Typography>New York State: 833-NYS-4-VAX (833-697-4829)</Typography>,
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  li: {
    margin: ".5rem 0",
  },
  ul: {
    paddingLeft: "2rem",
  },
}));

function createIdString(string) {
  return string
    .replace(/[,\s]+/g, "-")
    .replace(/\?+/g, "")
    .toLowerCase();
}

function QuestionContent() {
  const questions = content.map(({ question, answer, items = [] }) => {
    const idString = createIdString(question);
    const showList = items.length > 0;
    return (
      <Box id={idString} my={6}>
        <Box marginBottom={1}>
          <Typography variant="h5"> {question} </Typography>
        </Box>
        {answer}
        {showList && (
          <ul>
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </Box>
    );
  });
  return <Box>{questions}</Box>;
}

function Resources() {
  const classes = useStyles();

  const questions = content.map((contentObject) => {
    const idString = createIdString(contentObject.question);

    return (
      <li className={classes.li}>
        <Typography>
          <Link href={`#${idString}`}>{contentObject.question}</Link>
        </Typography>
      </li>
    );
  });

  return (
    <div>
      <Box my={5}>
        <ul className={classes.ul}>{questions}</ul>
      </Box>
      <QuestionContent />
    </div>
  );
}

export default asPage(Resources);
