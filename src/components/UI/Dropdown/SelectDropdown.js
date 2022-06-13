import React from "react";
import SelectDropdownItem from "./SelectDropdownItem";

function SelectDropdown(props) {
  const selectHandler = (e) => {
    props.stationHandler(e.target.value);
  };

  return (
    <div className="boarding">
      {props.heading && <h2>{props.heading}</h2>}
      <select onChange={selectHandler}>
        <option value="">--Select {props.sub_header}--</option>
        {props.destination.map((station) => (
          <SelectDropdownItem key={station.id} name={station.name} />
        ))}
      </select>
    </div>
  );
}

export default SelectDropdown;
