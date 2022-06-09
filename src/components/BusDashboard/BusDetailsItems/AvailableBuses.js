import React from "react";
import classes from "./css/AvailableBuses.module.css";

function AvailableBuses(props) {
  return (
    <div className={classes.bus_info}>
      <img src={props?.image} className={classes.bus_logo} />
      <p>{props?.name}</p>
    </div>
  );
}

export default AvailableBuses;
