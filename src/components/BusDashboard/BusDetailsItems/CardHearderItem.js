import React from "react";
import classes from "./css/CardHearderItem.module.css";

function CardHearderItem(props) {
  return (
    <div className={classes.header_info}>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
}

export default CardHearderItem;
