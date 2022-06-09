import React, { useContext, useState } from "react";
import SelectDropdown from "../components/UI/Dropdown/SelectDropdown";
import { station } from "../utils/data";
import { useNavigate } from "react-router-dom";
import ProfileNav from "../components/Layout/ProfileNav";
import SwapArrowIcon from "../assets/icons/SwapArrowIcon";
import AuthContext from "../context/auth/authContext";
import classes from "./css/SearchAvailableBuses.module.css";

function SearchAvailableBuses() {
  const { setEnteredLocationDetails } = useContext(AuthContext);
  const [enterdDestinationData, setEnteredDestinationData] = useState({
    pickupStation: "",
    destinationStation: "",
    date: "",
  });

  const navigate = useNavigate();

  const searchBusHandler = (e) => {
    e.preventDefault();
    const { pickupStation, destinationStation, date } = enterdDestinationData;
    if (!pickupStation || !destinationStation || !date) {
      return alert("Please Fill Form Correctly");
    }
    setEnteredLocationDetails(enterdDestinationData);
    navigate("/buses");
  };

  const dateChangeHandler = (e) => {
    setEnteredDestinationData((preState) => {
      return { ...preState, date: e.target.value };
    });
  };

  const destinationStationHandler = (station) => {
    setEnteredDestinationData((preState) => {
      return { ...preState, destinationStation: station };
    });
  };

  const pickupStationHandler = (station) => {
    setEnteredDestinationData((preState) => {
      return { ...preState, pickupStation: station };
    });
  };

  return (
    <div className={classes.search_buses}>
      <ProfileNav />
      <div className={classes.search_buses_container}>
        {/* <h1>Welcome Back {render?.name}</h1> */}
        <div className={classes.search_buses_content}>
          <section className={classes.search_buses_destination}>
            <SelectDropdown
              heading="From"
              destination={station}
              stationHandler={pickupStationHandler}
            />
            <SwapArrowIcon />
            <SelectDropdown
              heading="To"
              destination={station}
              stationHandler={destinationStationHandler}
            />
          </section>
          <section className="date_section">
            <h2> Depated On</h2>
            <input
              type="date"
              value={enterdDestinationData.date}
              onChange={dateChangeHandler}
            />
          </section>
          <button onClick={searchBusHandler} className="btn_search">
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchAvailableBuses;
