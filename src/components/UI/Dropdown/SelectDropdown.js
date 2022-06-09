import React from "react";
import SelectDropdownItem from "./SelectDropdownItem";

function SelectDropdown({ heading, destination, stationHandler }) {
  const selectHandler = (e) => {
    stationHandler(e.target.value);
  };

  return (
    <div className="boarding">
      <h2>{heading}</h2>
      <select onChange={selectHandler}>
        {destination.map((station) => (
          <SelectDropdownItem key={station.id} name={station.name} />
        ))}
      </select>
    </div>
  );
}

export default SelectDropdown;
