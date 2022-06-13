import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../components/Layout/LeftNav";
import BusContext from "../store/busContext";
import classes from "./css/Ticket.module.css";

function Ticket() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allUser, setAllUser] = useState([]);
  const { user, loggedIn } = useContext(BusContext);
  const { email } = loggedInUser || {};
  const findUser = allUser?.find((user) => {
    return user.email === email;
  });
  const { booking, ...data } = findUser || {};

  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedIn")));
    setAllUser(JSON.parse(localStorage.getItem("user")));
  }, [loggedIn, user]);
  console.log({ booking });
  return (
    <div className={classes.ticket_main_container}>
      <ProfileNav />
      {booking ? (
        <div className={classes.ticket_container}>
          <div className={classes.ticket_header}>
            <p>My Bookings</p>
            <p>Total Ticket ({"  " + booking?.length + " "})</p>
          </div>

          {booking?.map((ticket) => (
            <div className={classes.ticket_list}>
              <h2>Bus Details</h2>
              <div className={classes.destination}>
                <h3>From : {ticket?.pickupStation}</h3>
                <h3>To: {ticket?.destinationStation}</h3>
                <h3> On: {ticket?.date}</h3>
                <h3>Ticket Price : {ticket?.price} /-</h3>
              </div>
              <div className={classes.destination}>
                <h3> Total Seats : {ticket?.totalBookedSeats}</h3>
                <h3> Name : {ticket?.name}</h3>
                <h3>
                  Type : {ticket?.type[0] + " "} {ticket?.type[1]}
                </h3>
                <h3> Ticket Class : {ticket?.classes} </h3>
              </div>
              <div className={classes.destination}>
                <h3> Onboarding Time : {ticket?.pickupTime}</h3>
                <h3> Departure Time : {ticket?.destinationTime}</h3>
                <h3>Total Time : {ticket?.travelTime}</h3>
                <h3> Ticket Distance : {ticket?.distanceCovered} km</h3>
              </div>
              <hr />
              <h2>Passenger Details</h2>
              <div className={classes.destination}>
                <h3> Name : {data?.name}</h3>
                <h3> Phone : {ticket?.phone}</h3>
                <h3> Gender : {ticket?.gender} </h3>
                <h3> Age : {ticket?.age}</h3>
              </div>
              <div className={classes.destination}>
                <h3> Email : {data?.email}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.h1}>
          <h1> Bus Not Found</h1>
          <Link className={classes.link} to="/search">
            Please Search New Buses
          </Link>
        </div>
      )}
    </div>
  );
}

export default Ticket;
