import React from "react";
import { Link } from "react-router-dom";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <div
      key={meditation.id}
      className={
        meditation.attributes.duration === 0 ? "Finished" : "Card-element"
      }
    >
      <h4 className="Theme-element">Meditation Theme:</h4>
      <p className="Theme-tag">{meditation.attributes.theme}</p>

      {meditation.attributes.duration === 0 ? (
        <div className="Finished-div">
          <p className="Finished-message">Meditation Complete</p>
        </div>
      ) : (
        <Link className="link" to={`/meditations/${meditation.id}`}>
          <p className="Join-message">Join The Meditation</p>
        </Link>
      )}

      <div className="organizer-div">
        <p>Organizer: {meditation.attributes.organizer}</p>
      </div>
      <div className="duration-div">
        <p>Duration: {meditation.attributes.duration}</p>
      </div>
    </div>
  ));
  return <div className="Container">{meditationList}</div>;
};
export default Meditations;
