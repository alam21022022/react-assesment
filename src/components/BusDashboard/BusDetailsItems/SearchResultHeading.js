import React from "react";
import classes from "./css/SearchResultHeading.module.css";

function SearchResultHeading(props) {
  return (
    <div className={classes.search_result_heading}>
      <span id="filtercount">{props.noOfTrips} </span> Trip(s) Available from{" "}
      {props.pickupStation} - {props.destinationStation} on {props.date}
    </div>
  );
}

export default SearchResultHeading;
