import React from "react";
import { Link } from "react-router-dom";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <div key={meditation.id}>
      <li>
        <Link to={`/meditations/${meditation.id}`}>
          {meditation.attributes.theme} {meditation.attributes.duration}
        </Link>
      </li>
    </div>
  ));
  return (
    <div>
      <h3>{meditationList}</h3>
    </div>
  );
};
export default Meditations;
