import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import BusContext from "./store/busContext";
import Buses from "./pages/Buses";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/Error";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import SearchAvailableBuses from "./pages/Search";
import Ticket from "./pages/Ticket";

function Routers() {
  const { loggedIn } = useContext(BusContext);
  return (
    <Routes>
      {!loggedIn && <Route path="/" element={<Login />} />}
      {!loggedIn && <Route path="/register" element={<Register />} />}
      {loggedIn && <Route path="/search" element={<SearchAvailableBuses />} />}
      {loggedIn && <Route path="/reservation" element={<Reservation />} />}
      {loggedIn && <Route path="/buses" element={<Buses />} />}
      {loggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      {loggedIn && <Route path="/ticket" element={<Ticket />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;
