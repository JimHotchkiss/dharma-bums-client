import React from "react";
import { Link } from "react-router-dom";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <div className="Card-element">
      <li>
        <Link to={`/meditations/${meditation.id}`}>
          {meditation.attributes.theme}
        </Link>
        {meditation.attributes.duration}
      </li>
    </div>
  ));
  return <div className="Container">{meditationList}</div>;
};
export default Meditations;
