import React from "react";
import { Link } from "react-router-dom";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <div key={meditation.id} className="Card-element">
      <h4 className="Theme-element">Meditation Theme:</h4>
      {meditation.attributes ? (
        <p className="Theme-tag">{meditation.attributes.theme}</p>
      ) : (
        <p className="Theme-tag">{meditation.theme}</p>
      )}

      <Link className="link" to={`/meditations/${meditation.id}`}>
        <p className="Join-message">Join The Meditation</p>
      </Link>

      <div className="organizer-div">
        {meditation.attributes ? (
          <p>Organizer: {meditation.attributes.organizer}</p>
        ) : (
          <p>Organizer: {meditation.organizer}</p>
        )}
      </div>
      <div className="duration-div">
        {meditation.attributes ? (
          <p>Duration: {meditation.attributes.duration}</p>
        ) : (
          <p>Duration: {meditation.duration}</p>
        )}
      </div>
    </div>
  ));
  return <div className="Container">{meditationList}</div>;
};

export default Meditations;
