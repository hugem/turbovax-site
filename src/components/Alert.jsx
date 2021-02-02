import MaterialAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";

export default function Alert() {
  return (
    <MaterialAlert severity="warning">
      <b>Update (2/2):</b> Due to the snowstorm and the resulting rescheduling,
      new reservations appear to have been paused. We are also working on
      connecting to the{" "}
      <Link target="_blank" href="https://vax4nyc.nyc.gov/patient/s/">
        new NYC Vaccine Hubs website
      </Link>
      .
    </MaterialAlert>
  );
}
