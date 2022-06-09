import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import logoImage from "../../assets/images/logon.png";
import classes from "./css/Nav.module.css";

export default function Nav() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    setLoggedIn(undefined);
    localStorage.removeItem("loggedIn");
  };

  return (
    <header className="header" style={{ marginBottom: "120px" }}>
      <nav className={classes.nav}>
        <div className={classes.nav_div}>
          <img src={logoImage} alt="" id="logo" className={classes.nav__logo} />
        </div>
        <ul className="nav__links">
          {!loggedIn && (
            <NavLink strict to="/login" style={{ textDecoration: "none" }}>
              <li className="nav__item">Login</li>
            </NavLink>
          )}

          {loggedIn && (
            <NavLink onClick={logoutHandler} strict to="/">
              <li className="nav__item ttt">Logout</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}
