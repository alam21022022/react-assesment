import React from "react";
import TicketItem from "./TicketItem";

function TicketItems({ booking, data }) {
  return (
    <>
      {booking?.map((ticket) => (
        <TicketItem ticket={ticket} data={data} />
      ))}
    </>
  );
}

export default TicketItems;
