import React, { useContext, useEffect, useState } from "react";
import BusContext from "../store/busContext";
import classes from "./Booking.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "./UI/Model";
import { ageValidator, mobileNumValidator } from "../utils/utils";
import { toast } from "react-toastify";
import { constent } from "../utils/Constents";

function Booking(props) {
  const [loggedInUser, setLoggedInUser] = useState();
  const [bookingDetails, setBookingDetails] = useState({
    phone: "",
    age: "",
    gender: "",
  });

  const { user, loggedIn, setUser, busDetails, setModelIsShown } =
    useContext(BusContext);

  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedIn")));
  }, [loggedIn, user]);

  const navigate = useNavigate();

  const { name: userName, email: userEmail } = loggedInUser || {};
  const { totalBookedSeats } = busDetails || {};
  const { phone, age, gender } = bookingDetails || {};

  const bookingChangeHandler = (name) => (e) => {
    setBookingDetails((prevState) => {
      return { ...prevState, [name]: e.target.value };
    });
  };

  const bookTicketHandler = (e) => {
    e.preventDefault();
    // Checker
    const { phone, age, gender } = bookingDetails || {};
    if (!phone || !age || !gender) {
      return toast.error(constent.form_warning_msg);
    }
    if (!mobileNumValidator(phone)) {
      return toast.warn(constent.phone_war_msg);
    }
    if (!ageValidator(age)) {
      return toast.warn(constent.age_war_msg);
    }

    // Set Booked Ticket To user Profile
    const setBookedTicketToUserProfile = user.map((user) => {
      if (user?.email === userEmail) {
        let { booking } = user;
        return {
          ...user,
          booking: [...booking, { ...bookingDetails, ...busDetails }],
        };
      } else {
        return { ...user };
      }
    });
    setUser(setBookedTicketToUserProfile);
    localStorage.setItem("user", JSON.stringify(setBookedTicketToUserProfile));
    toast.success(constent.ticket_booked_success_msg);
    setTimeout(() => {
      navigate("/ticket");
      setModelIsShown();
    }, 1000);
  };

  const closeTicketHandler = (e) => {
    e.preventDefault();
    setModelIsShown(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <h2> Enter your Details {userName} </h2>
      <div className={classes.form_container}>
        <input
          type="text"
          disabled
          value={userName}
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          disabled
          value={userEmail}
          placeholder="Enter Your Email"
        />
        <input
          type="number"
          value={phone}
          onChange={bookingChangeHandler("phone")}
          placeholder="Enter Your Phone No."
        />
        <div className={classes.form_sub_con}>
          <input
            type="number"
            value={age}
            onChange={bookingChangeHandler("age")}
            placeholder="Age"
          />
          <select value={gender} onChange={bookingChangeHandler("gender")}>
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            value={totalBookedSeats}
            placeholder="Seats"
            disabled
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={bookTicketHandler}>Book</button>
        <button onClick={closeTicketHandler}>Close</button>
      </div>
    </Modal>
  );
}

export default Booking;
