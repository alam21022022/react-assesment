import React, { useContext, useEffect, useState } from "react";
import ProfileNav from "../components/Layout/LeftNav";
import BusContext from "../store/busContext";
import classes from "./css/Dashboard.module.css";

function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState();
  const { loggedIn } = useContext(BusContext);
  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedIn")));
  }, [loggedIn]);
  return (
    <div className={classes.dashboard_container}>
      <ProfileNav />
      <div className={classes.dashboard_content}>
        <h2>Welcome Back, {loggedInUser?.name}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
