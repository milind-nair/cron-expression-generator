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
import { setConstants } from "../../utils/utils";

const InputBox = ({
  parameter,
  value,
  setValue,
}: {
  parameter: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const NUM_ITEMS = setConstants(parameter);
  const [everyN, setEveryN] = React.useState("");
  const [checkboxes, setCheckboxes] = React.useState(
    new Array(NUM_ITEMS).fill(false)
  );
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [selection, setSelection] = React.useState("");
  const menuItems = Array.from(Array(NUM_ITEMS + 1).keys()).slice(1);
  const handleChange = (event: SelectChangeEvent) => {
    setEveryN(event.target.value as string);
  };
  const handleCheckBoxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
    const filteredList = newCheckboxes
      .map((element, index) => (element ? index : -1))
      .filter((index) => index !== -1);
    const newVal = filteredList.join(",");
    setValue(newVal);
  };
  return (
    <Box sx={{ minWidth: 100, mx: 10, mt: "2%" }}>
      <FormControl fullWidth>
        <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setSelection("every");
                setValue("*");
              }}
            >
              Every {parameter}
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
                value={everyN}
                sx={{ maxHeight: "25px", color: "white" }}
                onChange={handleChange}
              >
                {menuItems.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>{" "}
              {parameter}s
            </Button>
          </Grid>
          {selection === "everyN" && (
            <>
              <Grid item>
                <TextField
                  label="From"
                  id="outlined-basic"
                  size="small"
                  select
                  fullWidth
                  sx={{ minWidth: "10ch", color: "black", mx: -15 }}
                  value={from}
                  onChange={(event) => {
                    setFrom(event.target.value as string);
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
                  value={to}
                  sx={{ minWidth: "10ch", ml: -20 }}
                  onChange={(event) => {
                    setTo(event.target.value as string);
                  }}
                >
                  {menuItems.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setSelection("particular");
              }}
            >
              Particular {parameter}
            </Button>
          </Grid>
        </Grid>
        {selection === "everyN" && (
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "space-around", mt: "1%" }}
          ></Grid>
        )}
        <Grid container sx={{ justifyContent: "space-between", mt: "5%" }}>
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
