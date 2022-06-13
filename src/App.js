import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Layout/Nav";
import Card from "./components/UI/Card";
import Login from "./pages/Login";
import Routers from "./Routers";
import "react-toastify/dist/ReactToastify.css";
import Booking from "./components/Booking";
import BusContext from "./store/busContext";

function App() {
  const { modelIsShown } = useContext(BusContext);

  return (
    <div>
      {modelIsShown && <Booking />}
      <Nav />
      <Routers />
      <ToastContainer
        position="top-right"
        autoClose={900}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: "1.2rem" }}
      />
    </div>
  );
}

export default App;
