import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { sidebarNavItems } from "../../utils/data";
import classes from "../Layout/css/ProfileNav.module.css";

function ProfileNav() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  const [render, setRender] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  useEffect(() => {
    setRender(JSON.parse(localStorage.getItem("loggedIn")));
  }, [loggedIn]);

  return (
    <section className={classes.profile_nav_container}>
      {sidebarNavItems.map((item, index) => (
        <Link style={{ textDecoration: "none" }} to={item.to} key={index}>
          <div
            className={`sidebar__menu__item ${
              activeIndex === index ? "active" : ""
            }`}>
            <div className="sidebar__menu__item__icon">{item.icon}</div>
            <div className="sidebar__menu__item__text">{item.display}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default ProfileNav;
