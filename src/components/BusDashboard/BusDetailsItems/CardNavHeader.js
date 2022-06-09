import React from "react";
import classes from "./css/CardHeader.module.css";
function CardNavHeader() {
  return (
    <div className={classes.card_header}>
      <div>Buses</div>
      <div>Arrival</div>
      <div>Duration</div>
      <div>Departure</div>
      <div>Price</div>
    </div>
  );
}

export default CardNavHeader;
