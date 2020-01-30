import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = props => {
  return (
    <div className="Nav-color">
      <Link to={`/meditations/new`}>Create Meditation</Link>
    </div>
  );
};
export default NavBar;
