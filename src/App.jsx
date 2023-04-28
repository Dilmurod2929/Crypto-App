import React from "react";
import Logo from "./priceTracker/Logo";
import Coin from "./priceTracker/Coin";
import "./priceTracker/main.css";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Coin />
    </div>
  );
};

export default App;
