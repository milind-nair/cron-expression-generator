import Paper from "@mui/material/Paper";
import Panels from "./components/Panels";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title titleString="Cron Expression Generator" />
      <Paper elevation={3} sx={{ m: "2%" }}>
        <Panels />
      </Paper>
    </>
  );
}

export default App;
