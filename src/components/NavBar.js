import React from "react";
import { Link } from "react-router-dom";
const NavBar = props => {
  return (
    <div>
      <Link to={`/meditations/new`}>Create Meditation</Link>
    </div>
  );
};
export default NavBar;
