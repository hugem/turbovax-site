import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { asPage } from "./../helpers/hoc";

const content = [
  {
    question: "Booking Guides",
    answer: (
      <Typography>
        Please refer to the{" "}
        <Link
          href="https://www.nytimes.com/article/nyc-vaccine-shot.html"
          target="_blank"
          rel="noreferrer"
        >
          <em>New York Times</em>
        </Link>{" "}
        and{" "}
        <Link
          href="https://gothamist.com/news/new-york-city-vaccine-explainer"
          target="_blank"
          rel="noreferrer"
        >
          Gothamist
        </Link>{" "}
        guides for general questions about the process.
      </Typography>
    ),
  },
  {
    question: "Appointment Helpers",
    answer: (
      <Typography>
        Simply put: TurboVax queries vaccine scheduling websites to find
        available appointment slots. It <u>cannot</u> book appointments on your
        behalf.
      </Typography>
    ),
  },
  {
    question: "Release cadence tips",
    answer: (
      <Typography>Note: that the below information is anecdotal.</Typography>
    ),
  },
  {
    question: "Why couldn't I find the appointment that you tweeted?",
    answer: (
      <Typography>
        To be clear: it will be hard to find any appointment—with or without the
        tool. Availability is limited and demand is high. At this very moment,
        there are probably hundreds (if not thousands) of others looking for
        appointments on the very same websites as you are. Open appointments are
        often snapped up in less than a minute.
      </Typography>
    ),
  },
  {
    question: "How reliable is TurboVax?",
    answer: (
      <Typography>
        We try our best to deliver good data but cannot offer any warranty on
        the accuracy of the data. This is a volunteer effort—please adjust your
        expectations accordingly.
      </Typography>
    ),
  },
  {
    question: "Can I contribute to a Venmo, GoFundMe or etc?",
    answer: (
      <Typography>
        We appreciate your offers of generosity but do not need the funding.
        Instead, we'd kindly ask you to consider donating to{" "}
        <Link
          target="_blank"
          href="https://www.welcometochinatown.com/"
          rel="noreferrer"
        >
          Welcome to Chinatown
        </Link>
        , a grassroots initiative to support Chinatown businesses and help
        preserve one of New York City's most vibrant neighborhoods.
      </Typography>
    ),
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
  const questions = content.map((contentObject) => {
    const idString = createIdString(contentObject.question);

    return (
      <Box id={idString} my={6}>
        <Box marginBottom={1}>
          <Typography variant="h5"> {contentObject.question} </Typography>
        </Box>
        {contentObject.answer}
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
