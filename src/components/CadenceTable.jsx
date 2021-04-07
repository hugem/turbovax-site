import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {},
});

const PORTAL_DATA = [
  {
    name: "Vax4NYC",
    time: "15 minute intervals, larger drops at 11:45PM/12AM*",
    notes:
      "Some slots are currently withheld for 65+. If unbooked, they will be released the night before the scheduled appointment.",
  },
  {
    name: "NYS Department of Health",
    time: "5 minute intervals, larger drops randomly",
    notes:
      "Some have reported success finding a vaccine on the :05, :10 and etc mark. However, captchas.",
  },
  {
    name: "NYC Health + Hospitals",
    time: "Nightly 12AM, other drops randomly",
    notes: "Pre-fill form and check/uncheck the last checkbox",
  },
  {
    name: "CVS",
    time: "Nightly 12–2AM, every half hour",
    notes:
      "Try Queens, NY or Brooklyn, NY if zip code doesn't return any locations",
  },
  {
    name: "Rite Aid",
    time: "Nightly 12AM*",
  },
  {
    name: "Walgreens",
    time: "Friday afternoons/Saturday mornings",
  },
];

export default function CadenceTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Website</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PORTAL_DATA.map((portal) => (
            <TableRow key={portal.key}>
              {/* <TableCell component="th" scope="row">
                <Link target="_blank" href={portal.url}>
                  {portal.name}
                </Link>
              </TableCell> */}
              <TableCell>{portal.name}</TableCell>
              <TableCell>{portal.time}</TableCell>
              <TableCell>{portal.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
