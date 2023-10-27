import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBox from "../InputBox";
import DoneButton from "./DoneButton";

export default function Panels() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Seconds
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* I am an accordion */}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Second" />
        <DoneButton setExpanded={setExpanded} panel={"panel1"} />
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Minutes
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* You are currently not an owner */}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Minute" />
        <DoneButton setExpanded={setExpanded} panel={"panel2"} />
        <AccordionDetails>
          <Typography>
            {/* Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet. */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Hours
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* Filtering has been entirely disabled for whole web server */}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Hour" />
        <DoneButton setExpanded={setExpanded} panel={"panel3"} />
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Day Of Month
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Day-Of-Month" />
        <DoneButton setExpanded={setExpanded} panel={"panel4"} />
        <AccordionDetails>
          <Typography>
            {/* Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue. */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Month
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Month" />
        <DoneButton setExpanded={setExpanded} panel={"panel5"} />
        <AccordionDetails>
          <Typography>
            {/* Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue. */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Day Of Week
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Day-Of-Week" />
        <DoneButton setExpanded={setExpanded} panel={"panel6"} />
        <AccordionDetails>
          <Typography>
            {/* Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue. */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}