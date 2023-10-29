import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
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
  const handleEveryNChange = (event: SelectChangeEvent) => {
    const result = event.target.value as string;
    setEveryN(result);
    if (!value.includes("/")) setValue(value + "/" + result);
    else {
      setValue(value.split("/")[0] + "/" + result);
    }
  };

  const handleFrom = (event: any) => {
    const result = event.target.value as string;
    setFrom(result);
    setValue(result + "/" + value.split("/")[1]);
  };
  const clearEveryN = () => {
    setEveryN("");
    setFrom("");
    setTo("");
  };
  const clearCheckBoxes = () => {
    setCheckboxes(new Array(NUM_ITEMS).fill(false));
  };
  const handleTo = (event: any) => {
    const result = event.target.value as string;
    setTo(result);
    const fieldArray = value.split("/");
    if (parseInt(from) !== parseInt(result)) {
      const firstField = fieldArray[0];
      if (firstField.includes("-"))
        setValue(firstField.split("-")[0] + "-" + result + "/" + fieldArray[1]);
      else setValue(firstField + "-" + result + "/" + fieldArray[1]);
    } else {
      setValue(from + "/" + fieldArray[1]);
    }
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
    <Box sx={{ minWidth: 100, mx: 10 }}>
      <FormControl fullWidth>
        <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
          <Grid item>
            <Button
              sx={{ width: "200px", height: "75px" }}
              variant="contained"
              onClick={() => {
                setSelection("every");
                clearEveryN();
                clearCheckBoxes();
                setValue("*");
              }}
            >
              Every {parameter}
            </Button>
          </Grid>

          <Grid item>
            <Button
              sx={{ width: "200px", height: "75px" }}
              variant="contained"
              onClick={() => {
                clearCheckBoxes();
                setSelection("everyN");
              }}
            >
              Every{" "}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={everyN}
                sx={{ maxHeight: "25px", color: "white" }}
                onChange={handleEveryNChange}
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

          <Grid item>
            <Button
              sx={{ width: "200px", height: "75px" }}
              variant="contained"
              onClick={() => {
                clearEveryN();
                setSelection("particular");
              }}
            >
              Particular {parameter}
            </Button>
          </Grid>
        </Grid>

        {selection === "particular" && (
          <Grid container sx={{ justifyContent: "center", mt: "5%" }}>
            {checkboxes.map((checked, index) => (
              <Grid item>
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => handleCheckBoxChange(index)}
                    />
                  }
                  label={
                    <Typography variant="body2" color="textPrimary">
                      {index}
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
              </Grid>
            ))}
          </Grid>
        )}

        {selection === "everyN" && (
          <Grid
            container
            sx={{ justifyContent: "center", mt: "10px" }}
            spacing={2}
          >
            <Grid item>
              <TextField
                label="From"
                id="outlined-basic"
                size="small"
                select
                fullWidth
                sx={{
                  width: "100px",
                  height: "10px",
                  color: "black",
                  my: "15%",
                }}
                value={from}
                onChange={handleFrom}
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
                sx={{
                  width: "100px",
                  height: "10px",
                  color: "black",
                  my: "15%",
                }}
                onChange={handleTo}
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
      </FormControl>
    </Box>
  );
};

export default InputBox;
