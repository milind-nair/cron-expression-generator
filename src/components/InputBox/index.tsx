import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const InputBox = () => {
  const [everyNseconds, setEveryNseconds] = React.useState("");
  const [checkboxes, setCheckboxes] = React.useState(new Array(60).fill(false));
  const [fromSeconds, setFromSeconds] = React.useState("");
  const [selection, setSelection] = React.useState("");
  const menuItems = Array.from(Array(61).keys()).slice(1);
  const handleChange = (event: SelectChangeEvent) => {
    setEveryNseconds(event.target.value as string);
  };
  const handleCheckBoxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };
  return (
    <Box sx={{ minWidth: 120, mx: 10, mt: "5%" }}>
      <FormControl fullWidth>
        <Grid container spacing={1.5} sx={{ justifyContent: "center" }}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setSelection("every");
              }}
            >
              Every Second
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setSelection("everyN");
              }}
            >
              Every{" "}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={everyNseconds}
                sx={{ maxHeight: "25px", color: "white" }}
                onChange={handleChange}
              >
                {menuItems.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              Seconds
            </Button>
            <InputLabel id="demo-simple-select-label"></InputLabel>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setSelection("particular");
              }}
            >
              Particular Second
            </Button>
          </Grid>
        </Grid>
        {selection === "everyN" && (
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", mt: "1%" }}
          >
            <Grid item>
              <TextField
                label="From"
                id="outlined-basic"
                size="small"
                select
                sx={{ m: 1, minWidth: "10ch", color: "black" }}
                value={fromSeconds}
                onChange={(event) => {
                  setFromSeconds(event.target.value as string);
                }}
                variant="outlined"
              >
                {menuItems.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="To"
                select
                size="small"
                variant="outlined"
                fullWidth
                value={everyNseconds}
                sx={{ m: 1, minWidth: "10ch" }}
              >
                {menuItems.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        )}
        <Grid container sx={{ justifyContent: "center", mt: "5%" }}>
          {selection === "particular" &&
            checkboxes.map((checked, index) => (
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      key={index}
                      checked={checked}
                      onChange={() => handleCheckBoxChange(index)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={index}
                />
              </Grid>
            ))}
        </Grid>
      </FormControl>
    </Box>
  );
};

export default InputBox;
