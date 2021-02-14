import Typography from "@material-ui/core/Typography";
import { Alert, Intro, Appointments, Summary } from "./../components/index";

export default function Home() {
  return (
    <div>
      <Intro />
      <Alert />
      <Summary />
      <Appointments />
    </div>
  );
}
