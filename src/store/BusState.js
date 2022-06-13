import React, { useEffect, useReducer, useState } from "react";
import BusContext from "./busContext";

function AuthState(props) {
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);
  const [enteredLocationDetails, setEnteredLocationDetails] = useState();
  const [busDetails, setBusDetails] = useState();
  const [modelIsShown, setModelIsShown] = useState(false);

  const getUser = JSON.parse(localStorage.getItem("user"));
  const getLoggedInUser = JSON.parse(localStorage.getItem("loggedIn"));

  useEffect(() => {
    !getUser ? setUser([]) : setUser(getUser);
    !getLoggedInUser ? setLoggedIn(undefined) : setLoggedIn(getLoggedInUser);
  }, []);

  return (
    <BusContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        enteredLocationDetails,
        setEnteredLocationDetails,
        busDetails,
        setBusDetails,
        modelIsShown,
        setModelIsShown,
      }}>
      {props.children}
    </BusContext.Provider>
  );
}

export default AuthState;
