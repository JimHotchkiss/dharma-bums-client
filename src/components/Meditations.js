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
      <h4 className="Theme-element">
        Theme:
        <br />
        <Link className="link" to={`/meditations/${meditation.id}`}>
          {meditation.attributes.theme}
        </Link>
      </h4>
      {meditation.attributes.duration === 0 ? (
        <div className="Finished-div">
          <p className="Finished-message">Meditation Complete</p>
        </div>
      ) : null}

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
