import Box from "@material-ui/core/Box";
import { Alert, Intro, Appointments } from "./../components/index";

export default function Home() {
  return (
    <div>
      <Box mb={5}>
        <Intro />
      </Box>
      <Alert />
      <Appointments />
    </div>
  );
}
