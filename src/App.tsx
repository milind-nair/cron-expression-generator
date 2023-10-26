import InputBox from "./components/InputBox";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

function App() {
  return (
    <>
        <Paper elevation={3} sx={{ mx: 10 }}>
          <InputBox />
          <InputBox />
          <InputBox />
        </Paper>
    </>
  );
}

export default App;
