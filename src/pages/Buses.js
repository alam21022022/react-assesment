import React, { useContext } from "react";
import BusDetails from "../components/BusDashboard/BusDetails";
import BusFilter from "../components/BusDashboard/BusFilter";
import AuthContext from "../context/auth/authContext";
import classes from "./css/Buses.module.css";
import { busSchedule, AvailableBuses } from "../utils/data";
import { filterBusData } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import ProfileNav from "../components/Layout/ProfileNav";

function Buses() {
  const navigate = useNavigate();
  const { enteredLocationDetails, setBusDetails } = useContext(AuthContext);

  const busData = filterBusData(
    AvailableBuses,
    busSchedule,
    enteredLocationDetails
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

  return (
    <div className={classes.buses_container}>
      <ProfileNav />
      <BusDetails details={busData} bookSeat={bookSeatButtonHandler} />
    </div>
  );
}

export default Buses;
