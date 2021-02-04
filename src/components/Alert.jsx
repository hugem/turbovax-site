import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";

export default function Alert() {
  return (
    <MaterialAlert severity="info">
      <b>Update (2/4):</b> Reservations have resumed on the three major
      government vaccine portals. We are actively checking all 42 administration
      sites for appointments.
    </MaterialAlert>
  );
}
