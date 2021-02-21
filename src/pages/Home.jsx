import Typography from "@material-ui/core/Typography";
import { Alert, Intro, Appointments } from "./../components/index";

export default function Home() {
  return (
    <div>
      <Intro />
      {/* <Alert /> */}
      <Appointments />
    </div>
  );
}
