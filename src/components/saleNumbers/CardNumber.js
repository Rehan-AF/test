import React from "react";
import useStyles from "./CardNumberStyle";
function CardNumber() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.CardNumber_main_div}>
        <div className={classes.cardNumber}>
          <h1>9999</h1>
          <h3>SlOTHz</h3>
        </div>
        <div className={classes.cardNumber}>
          <h1>156</h1>
          <h3>TRAITS</h3>
        </div>
        <div className={classes.cardNumber}>
          <h1>10</h1>
          <h3>COMMUNITY PRIZES</h3>
        </div>
        <div className={classes.cardNumber}>
          <h1>20</h1>
          <h3>EXCLUSIVE SLOTHz</h3>
        </div>
      </div>
    </>
  );
}

export default CardNumber;
