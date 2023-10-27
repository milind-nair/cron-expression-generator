import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import React from "react";

const nextPanel = (panel: string) => {
  let num = parseInt(panel.charAt(5));
  if (panel === "panel6") return false;
  else {
    const result = panel.slice(0, -1) + (num + 1);
    return result;
  }
};

function DoneButton({
  setExpanded,
  panel,
}: {
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
  panel: string;
}) {
  return (
    <AccordionDetails
      sx={{
        alignItems: "flex-end",
        display: "flex",
      }}
    >
      <Button
        sx={{ marginLeft: "auto" }}
        variant="contained"
        onClick={() => {
          setExpanded(nextPanel(panel));
        }}
      >
        Done
      </Button>
    </AccordionDetails>
  );
}

export default DoneButton;
