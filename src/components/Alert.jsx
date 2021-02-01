import MaterialAlert from "@material-ui/lab/Alert";

export default function Alert() {
  return (
    <MaterialAlert severity="warning">
      <b>Update (2/1):</b> Due to the snowstorm, some existing resevervations
      have been rescheduled. This may impact your ability to book new
      reservations though we will continue to check the major vaccine portals.
    </MaterialAlert>
  );
}
