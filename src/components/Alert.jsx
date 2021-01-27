import MaterialAlert from "@material-ui/lab/Alert";

export default function Alert() {
  return (
    <MaterialAlert severity="warning">
      <b>Update (1/20):</b> Due to a vaccine shortage, city/state reservations
      are now paused. We will continue to query for availability, so be sure to
      check in for updates.
    </MaterialAlert>
  );
}
