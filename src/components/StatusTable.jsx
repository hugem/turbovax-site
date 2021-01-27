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

function createData(name, url, numSites, status, statusUpdatedAt) {
  return { name, url, numSites, status, statusUpdatedAt };
}

const rows = [
  createData(
    "NYC Vaccine Hub",
    "https://vaccinepod.nyc.gov",
    20,
    "Not accepting appointments",
    "Jan 21"
  ),
  createData(
    "Health and Hospitals",
    "https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",
    14,
    "Not accepting appointments",
    "Jan 21"
  ),
  createData(
    "NYS Vaccination Centers",
    "https://am-i-eligible.covid19vaccine.health.ny.gov/",
    3,
    "Not accepting appointments",
    "Jan 20"
  ),
];

export default function StatusTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Portal</TableCell>
            <TableCell>Sites</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Updated at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link target="_blank" href={row.url}>
                  {row.name}
                </Link>
              </TableCell>
              <TableCell>{row.numSites}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.statusUpdatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
