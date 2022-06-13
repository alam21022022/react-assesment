import { v4 as uuidv4 } from "uuid";

//********************  Filtering Bus Routes Data **************************/
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

    const { classes, name, type, image, seats } = buses;

    const { date, destinationStation, pickupStation } = enteredLocationDetails;

    const { time: pickupTime, distance: pickupDistance } =
      pickupStationFilter[0] || {};

    const { time: destinationTime, distance: destinationDistance } =
      destinationStationFilter[0] || {};

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
      seats,
    });
  }
  return arr;
};

// Calculate Distance between two station
const calculateBusDistance = (
  pickupStationDistance,
  destinationStationDistance
) => {
  const distance = Math.abs(pickupStationDistance - destinationStationDistance);
  return distance;
};

// Calculate Time between two station
const calculateTravelTime = (pickupTime, destinationTime) => {
  const totaltravelTime = Number(destinationTime) - Number(pickupTime);
  const time = Math.abs(totaltravelTime) + ":00 Hr";
  return time;
};

// Calculate Price between two station
const calculatePrice = (distance) => {
  const price = Math.abs(Number(distance) * 100);
  return price;
};

// Calculate Time Meridian between two station
export const timeMeridianCalculation = (time) => {
  let timeInNum = Number(time);
  let res = timeInNum > 12 ? ":00 PM" : ":00 AM";
  return time + res;
};
// ************************FIltering Ends Here**********************************************************//

/**********************VALIDATION***************** */
// Email Validator
export const emailValidator = (str) => {
  let check = str.includes("@") && str.includes(".");
  return check;
};

// Password Validator
export const passwordValidator = (str) => {
  const result = str.trim().length > 4;
  return result;
};

// Name Validator
export const nameValidator = (str) => {
  const result = str.trim().length > 2;
  return result;
};

// Age validator
export const ageValidator = (age) => {
  const userAge = Number(age);
  const ageCriteria = userAge > 0 && userAge < 101;
  return ageCriteria;
};

// Mobile Number Validator
export const mobileNumValidator = (num) => {
  const mobileNumCriteria = num.trim().length < 11;
  return mobileNumCriteria;
};
