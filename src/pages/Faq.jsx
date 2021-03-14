import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { asPage } from "./../helpers/hoc";

const content = [
  {
    question: "How do I sign up for a vaccine in NYC?",
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
    question: "What can TurboVax do? What can't it do?",
    answer: (
      <Typography>
        Simply put: TurboVax queries vaccine scheduling websites to find
        available appointment slots. It <u>cannot</u> book appointments on your
        behalf.
      </Typography>
    ),
  },
  {
    question: "Why did you build TurboVax?",
    answer: (
      <Typography>
        The existing vaccine scheduling system is complicated. Existing websites
        don't 1) make it easy to search for appointments or 2) notify people
        eligible groups when appointments do open up. By publishing open
        appointment slots on Twitter, we hope to give New Yorkers better odds at
        snagging an appointment.
      </Typography>
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
        , a grassroots initiative to support Chinatown businesses and amplify
        community voices in order to preserve one of New York City's most
        vibrant neighborhoods.
      </Typography>
    ),
  },
];

const useStyles = makeStyles((theme) => ({
  li: {
    margin: ".5rem 0",
  },
  ol: {
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
      <Box id={idString} marginBottom={4}>
        <Typography variant="h6"> {contentObject.question} </Typography>
        {contentObject.answer}
      </Box>
    );
  });
  return <Box>{questions}</Box>;
}

function Faq() {
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
        <ol className={classes.ol}>{questions}</ol>
      </Box>
      <QuestionContent />
    </div>
  );
}

export default asPage(Faq);
