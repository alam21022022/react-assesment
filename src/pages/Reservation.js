import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardHearderItem from "../components/BusDashboard/BusDetailsItems/CardHearderItem";
import CardNavHeader from "../components/BusDashboard/BusDetailsItems/CardNavHeader";
import Card from "../components/UI/Card";
import BusContext from "../store/busContext";
import { timeMeridianCalculation } from "../utils/utils";
import classes from "./css/Reservation.module.css";

function Reservation() {
  const { busDetails, setBusDetails, setModelIsShown } = useContext(BusContext);
  const [seatsCount, setSeatsCount] = useState(1);
  console.log({ busDetails });
  const {
    image,
    name,
    pickupTime,
    pickupStation,
    travelTime,
    distanceCovered,
    destinationTime,
    destinationStation,
    price,
    type,
    id,
    seats,
  } = busDetails || {};

  const [busType, seatType] = type || [];
  const decreaseSeatHandler = () => {
    seatsCount > 1 && setSeatsCount(seatsCount - 1);
  };

  console.log({ price });

  const increaseSeatHandler = () => {
    setSeatsCount(seatsCount + 1);
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const totalBookedSeats = seatsCount;
    const totalBookedPrice = seatsCount * price;

    setBusDetails((prevState) => {
      return { ...prevState, totalBookedPrice, totalBookedSeats };
    });
    setModelIsShown(true);
  };

  console.log({ busDetails });

  return (
    <Card>
      <div className={classes.reservation_container}>
        {busDetails !== undefined ? (
          <>
            <div className={classes.bus_info}>
              <h2> {name + "  "}</h2>
              <h2> {busType + "  " + seatType}</h2>
              <h2>{seats - seatsCount} Seats Left</h2>
            </div>
            <CardNavHeader />
            <div className={classes.detail_sub_container}>
              <img className={classes.image} src={image} />

              <CardHearderItem
                p1={timeMeridianCalculation(pickupTime)}
                p2={pickupStation}
              />

              <CardHearderItem p1={travelTime} p2={distanceCovered + " Km"} />

              <CardHearderItem
                p1={timeMeridianCalculation(destinationTime)}
                p2={destinationStation}
              />

              <div className={classes.seats}>
                <div className={classes.seats_btn}>
                  <button onClick={decreaseSeatHandler}>-</button>
                  {seatsCount} seat{" "}
                  <button onClick={increaseSeatHandler}>+</button>
                </div>
                <p className={classes.price}>
                  Rs {"  " + Number(price) * seatsCount}/-
                </p>
              </div>
            </div>
            <div className={classes.booknow_container}>
              <button onClick={handleReservation}>Book Now</button>
            </div>
          </>
        ) : (
          <div className={classes.h1}>
            <h1> Bus Not Found</h1>
            <Link className={classes.link} to="/search">
              Please Search New Buses
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}

export default Reservation;
