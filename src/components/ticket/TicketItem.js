import React from "react";
import classes from "./TicketItem.module.css";

function TicketItem({ ticket, data }) {
  return (
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
  );
}

export default TicketItem;
