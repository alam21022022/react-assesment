import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import CardHearderItem from "../components/BusDashboard/BusDetailsItems/CardHearderItem";
import CardNavHeader from "../components/BusDashboard/BusDetailsItems/CardNavHeader";
import DetailItem from "../components/BusDashboard/BusDetailsItems/DetailItem";
import CoachLayout from "../components/Layout/CoachLayout";
import ProfileNav from "../components/Layout/ProfileNav";
import Card from "../components/UI/Card";
import AuthContext from "../context/auth/authContext";
import { AvailableBuses } from "../utils/data";
import { timeMeridianCalculation } from "../utils/utils";
import classes from "./css/Reservation.module.css";

function Reservation() {
  const { busDetails } = useContext(AuthContext);
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
  } = busDetails;
  const [busType, seatType] = type;
  const bookSeat = () => {
    //
  };

  return (
    <Card>
      <div className={classes.reservation_container}>
        <div className={classes.bus_info}>
          <h2> {name + "  "}</h2>
          <h2> {busType + "  " + seatType}</h2>
          <h2>10 avaisdbchukdjs</h2>
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

          <div>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Reservation;
