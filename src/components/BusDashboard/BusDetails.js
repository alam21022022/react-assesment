import React from "react";
import classes from "./BusDetails.module.css";
import Card from "../UI/Card";
import SearchResultHeading from "./BusDetailsItems/SearchResultHeading";
import CardNavHeader from "./BusDetailsItems/CardNavHeader";
import DetailsItems from "./BusDetailsItems/DetailsItems";
import { Link } from "react-router-dom";

function BusDetails({ details, bookSeat }) {
  return (
    <div className={classes.detail_container}>
      <div className={classes.detail_sub_container}>
        {details[0]?.pickupStation !== undefined ? (
          <>
            <SearchResultHeading
              noOfTrips={details?.length}
              pickupStation={details[0]?.pickupStation}
              destinationStation={details[0]?.destinationStation}
              date={details[0]?.date}
            />
            <CardNavHeader />
            <DetailsItems details={details} bookSeat={bookSeat} />
          </>
        ) : (
          <div className={classes.h1}>
            <h1>Buses Not Found</h1>
            <Link className={classes.link} to="/search">
              Please Search New Buses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusDetails;
