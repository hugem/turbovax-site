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

export default function StatusTable({ portalData }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Portal</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Sites</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portalData.map((portal) => (
            <TableRow key={portal.key}>
              <TableCell component="th" scope="row">
                <Link target="_blank" href={portal.url}>
                  {portal.name}
                </Link>
              </TableCell>
              <TableCell>{portal.type}</TableCell>
              <TableCell>{portal.site_count}</TableCell>
              <TableCell>{portal.metadata && portal.metadata.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
