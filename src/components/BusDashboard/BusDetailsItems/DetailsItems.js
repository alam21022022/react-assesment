import React from "react";
import DetailItem from "./DetailItem";

function DetailsItems({ details, bookSeat }) {
  return (
    <>
      {details?.map((bus) => {
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
          id,
        } = bus;
        return (
          <DetailItem
            key={id}
            image={image}
            name={name}
            pickupTime={pickupTime}
            pickupStation={pickupStation}
            travelTime={travelTime}
            distanceCovered={distanceCovered}
            destinationTime={destinationTime}
            destinationStation={destinationStation}
            price={price}
            id={id}
            bookSeat={bookSeat}
          />
        );
      })}
    </>
  );
}

export default DetailsItems;
