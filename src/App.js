import { useEffect } from "react";
import Nav from "./components/Layout/Nav";
import Card from "./components/UI/Card";
import Login from "./pages/Login";
import Routers from "./Routers";

function App() {
  console.log("RERENDER");
  return (
    <div>
      <Nav />
      <Routers />
      {/* <Card /> */}
    </div>
  );
}

export default App;
