import React from "react";
import { Link } from "react-router-dom";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <div key={meditation.id} className="Card">
      <div className="Card-main">
        <li>
          <h2 className="Organizer-name">
            <Link to={`/meditations/${meditation.id}`}>
              {meditation.attributes.theme} {meditation.attributes.duration}
            </Link>
          </h2>
        </li>
      </div>
    </div>
  ));
  return (
    <div>
      <h3>{meditationList}</h3>
    </div>
  );
};
export default Meditations;
