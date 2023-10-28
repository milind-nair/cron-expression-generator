import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBox from "../InputBox";
import DoneButton from "./DoneButton";
import CronExpressionDisplay from "../ResultDisplay";

export default function Panels() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [param1, setParam1] = React.useState("*");
  const [param2, setParam2] = React.useState("*");
  const [param3, setParam3] = React.useState("*");
  const [param4, setParam4] = React.useState("*");
  const [param5, setParam5] = React.useState("*");
  const [param6, setParam6] = React.useState("*");
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
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param1}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Second" value={param1} setValue={setParam1} />
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
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Minutes
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param2}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Minute" value={param2} setValue={setParam2} />
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
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Hours
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param3}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Hour" value={param3} setValue={setParam3} />
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
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Day Of Month
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param4}
          </Typography>
        </AccordionSummary>
        <InputBox
          parameter="Day-Of-Month"
          value={param4}
          setValue={setParam4}
        />
        <DoneButton setExpanded={setExpanded} panel={"panel4"} />
        <AccordionDetails></AccordionDetails>
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
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Month
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param5}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Month" value={param5} setValue={setParam5} />
        <DoneButton setExpanded={setExpanded} panel={"panel5"} />
        <AccordionDetails></AccordionDetails>
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
          <Typography variant="h6" sx={{ width: "50%", flexShrink: 0 }}>
            Day Of Week
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {param6}
          </Typography>
        </AccordionSummary>
        <InputBox parameter="Day-Of-Week" value={param6} setValue={setParam6} />
        <DoneButton setExpanded={setExpanded} panel={"panel6"} />
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <CronExpressionDisplay
        cronExpression={
          param1 +
          " " +
          param2 +
          " " +
          param3 +
          " " +
          param4 +
          " " +
          param5 +
          " " +
          param6
        }
      />
    </div>
  );
}
