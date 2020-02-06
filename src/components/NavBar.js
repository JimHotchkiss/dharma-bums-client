import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = props => {
  debugger;
  return (
    <div className="Nav-wrapper">
      <div className="Meditation-link">
        <Link className="Links" to={`/meditations`}>
          <h3>
            Dharma <span> Bums</span>
          </h3>
        </Link>
      </div>

      <div className="Meditations-link">
        <Link className="Links" to={`/meditations`}>
          <p>meditation app</p>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
