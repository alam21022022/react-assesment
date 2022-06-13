import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BusContext from "../../store/busContext";
import { sidebarNavItems } from "../../utils/data";
import classes from "../Layout/css/ProfileNav.module.css";

function ProfileNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    console.log({ curPath });
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    console.log({ activeItem });
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <section className={classes.profile_nav_container}>
      {sidebarNavItems.map((item, index) => (
        <Link style={{ textDecoration: "none" }} to={item.to} key={index}>
          <div
            className={`sidebar__menu__item ${
              activeIndex === index ? "sidebar_active" : ""
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
