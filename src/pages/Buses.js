import React, { useContext } from "react";
import BusDetails from "../components/BusDashboard/BusDetails";
import BusContext from "../store/busContext";
import classes from "./css/Buses.module.css";
import { busSchedule, AvailableBuses } from "../utils/data";
import { filterBusData } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import ProfileNav from "../components/Layout/LeftNav";
import NotFound from "./Error";

function Buses() {
  const navigate = useNavigate();
  const { enteredLocationDetails, setBusDetails } = useContext(BusContext);

  const busData = filterBusData(
    AvailableBuses,
    busSchedule,
    enteredLocationDetails || {}
  );

  const bookSeatButtonHandler = (e, id) => {
    e.preventDefault();
    console.log({ id });

    const selectedBus = busData?.filter((bus) => {
      return id === bus?.id;
    });

    setBusDetails(selectedBus[0]);
    navigate("/reservation");
  };

  // if (busData[0]?.pickupStation === undefined) {
  //   navigate("/search");
  // }

  return (
    <>
      <div className={classes.buses_container}>
        <ProfileNav />
        <BusDetails details={busData} bookSeat={bookSeatButtonHandler} />
      </div>
    </>
  );
}

export default Buses;
