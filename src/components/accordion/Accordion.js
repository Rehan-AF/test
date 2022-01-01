import React from "react";
import useStyles from "./AccordionStyle";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccordionData from "./AccordionData";
function Accord() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.accordion_main}>
        {AccordionData.map((val) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                iconStart={<HelpOutlineIcon />}
              >
                <Typography className={classes.heading}>{val.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{val.discp}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

export default Accord;
