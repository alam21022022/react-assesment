import React from "react";
import classes from "./BusDetails.module.css";
import Card from "../UI/Card";
import { timeMeridianCalculation } from "../../utils/utils";
import SearchResultHeading from "./BusDetailsItems/SearchResultHeading";
import CardNavHeader from "./BusDetailsItems/CardNavHeader";
import DetailsItems from "./BusDetailsItems/DetailsItems";

function BusDetails({ details, bookSeat }) {
  console.log({ details });
  return (
    <div className={classes.detail_container}>
      <div className={classes.detail_sub_container}>
        <SearchResultHeading
          noOfTrips={details?.length}
          pickupStation={details[0]?.pickupStation}
          destinationStation={details[0]?.destinationStation}
          date={details[0]?.date}
        />
        <CardNavHeader />
        <DetailsItems details={details} bookSeat={bookSeat} />
      </div>
    </div>
  );
}

export default BusDetails;
