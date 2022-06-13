import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../components/Layout/LeftNav";
import TicketItems from "../components/ticket/TicketItems";
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

  return (
    <div className={classes.ticket_main_container}>
      <ProfileNav />
      {booking ? (
        <div key={booking?.pickupStation} className={classes.ticket_container}>
          <div className={classes.ticket_header}>
            <p>My Bookings</p>
            <p>Total Ticket ({"  " + booking?.length + " "})</p>
          </div>
          <TicketItems booking={booking} data={data} />
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
