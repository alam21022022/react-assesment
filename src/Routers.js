import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth/authContext";
import Buses from "./pages/Buses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import SeatSelection from "./pages/Reservation";
import SearchAvailableBuses from "./pages/SearchAvailableBuses";

function Routers() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route strict path="/" element={<SearchAvailableBuses />} />
      {!loggedIn && <Route strict path="/login" element={<Login />} />}
      <Route strict path="/register" element={<Register />} />
      <Route strict path="/search" element={<SearchAvailableBuses />} />
      <Route strict path="/reservation" element={<Reservation />} />
      <Route strict path="/buses" element={<Buses />} />
    </Routes>
  );
}

export default Routers;
