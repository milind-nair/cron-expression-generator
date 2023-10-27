import Paper from "@mui/material/Paper";
import ControlledAccordions from "./components/Accordion";

function App() {
  return (
    <>
      <Paper elevation={3} sx={{ m: "10%" }}>
        <ControlledAccordions />

      </Paper>
    </>
  );
}

export default App;
