import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BusContext from "../../store/busContext";
import logoImage from "../../assets/images/logo.png";
import classes from "./css/Nav.module.css";

export default function Nav() {
  const { loggedIn, setLoggedIn } = useContext(BusContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    setLoggedIn(undefined);
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <header className="header" style={{ marginBottom: "120px" }}>
      <nav className={classes.nav}>
        <div className={classes.nav_div}>
          <NavLink to="/search">
            <img
              src={logoImage}
              alt=""
              id="logo"
              className={classes.nav__logo}
            />
          </NavLink>
        </div>
        <ul className="nav__links">
          {!loggedIn && (
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li className="nav__item">Login</li>
            </NavLink>
          )}

          {loggedIn && (
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={logoutHandler}
              to="/">
              <li className="nav__item ttt">Logout</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}
