import { v4 as uuidv4 } from "uuid";

export const filterBusData = (
  AvailableBuses,
  busSchedule,
  enteredLocationDetails
) => {
  let arr = [];
  for (let buses of AvailableBuses) {
    let pickupStationFilter = busSchedule[buses.id].filter((buses) => {
      return buses.cityName === enteredLocationDetails?.pickupStation;
    });

    let destinationStationFilter = busSchedule[buses.id].filter((buses) => {
      return buses.cityName === enteredLocationDetails?.destinationStation;
    });

    const { classes, name, type, image } = buses;

    const { date, destinationStation, pickupStation } = enteredLocationDetails;

    const { time: pickupTime, distance: pickupDistance } =
      pickupStationFilter[0];

    const { time: destinationTime, distance: destinationDistance } =
      destinationStationFilter[0];

    const distanceCovered = calculateBusDistance(
      pickupDistance,
      destinationDistance
    );

    const price = calculatePrice(distanceCovered);

    const travelTime = calculateTravelTime(pickupTime, destinationTime);

    arr.push({
      id: uuidv4(),
      image,
      classes,
      name,
      type,
      distanceCovered,
      travelTime,
      price,
      date,
      destinationStation,
      pickupStation,
      pickupTime,
      destinationTime,
    });
  }
  return arr;
};

const calculateBusDistance = (
  pickupStationDistance,
  destinationStationDistance
) => {
  const distance = Math.abs(pickupStationDistance - destinationStationDistance);
  return distance;
};

const calculateTravelTime = (pickupTime, destinationTime) => {
  const totaltravelTime = Number(destinationTime) - Number(pickupTime);
  const time = Math.abs(totaltravelTime) + ":00 Hr";
  return time;
};

const calculatePrice = (distance) => {
  const price = "Rs " + String(Math.abs(Number(distance) * 100));
  return price;
};

export const timeMeridianCalculation = (time) => {
  let timeInNum = Number(time);
  let res = timeInNum > 12 ? ":00 PM" : ":00 AM";
  return time + res;
};
