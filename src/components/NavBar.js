import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = props => {
  debugger;
  return (
    <div className="Nav-wrapper">
      <div className="Top-div">
        <p className="Dharma-tag">Dharma Bums</p>
      </div>
      <div className="Bottom-div">
        <p>Meditation App</p>
      </div>
    </div>
  );
};
export default NavBar;
