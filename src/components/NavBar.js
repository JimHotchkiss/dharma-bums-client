import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = props => {
  debugger;
  return (
    <div className="Nav-wrapper">
      <div className="Meditation-link">
        <Link className="Links" to={`/meditations/new`}>
          Create Meditation
        </Link>
      </div>

      <div className="Meditations-link">
        <Link className="Links" to={`/meditations`}>
          Back to Meditations
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
