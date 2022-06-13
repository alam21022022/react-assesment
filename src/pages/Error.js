import React from "react";
import ProfileNav from "../components/Layout/LeftNav";
import classes from "./css/NotFound.module.css";

function NotFound() {
  return (
    <div className={classes.error_page}>
      <ProfileNav />
      <p>Error 404: Page Not Found</p>
    </div>
  );
}

export default NotFound;
