import Paper from "@mui/material/Paper";
import Panels from "./components/Panels";

function App() {
  return (
    <>
      <Paper elevation={3} sx={{ m: "10%" }}>
        <Panels />
      </Paper>
    </>
  );
}

export default App;
