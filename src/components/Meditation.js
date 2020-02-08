import React from "react";
import "./Meditation.css";
import DharmaTalks from "./DharmaTalk";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];
  return (
    <div className="Meditation-wrapper">
      <div className="Card-wrapper">
        <div className="Meditation-field">
          <div className="Theme-div">
            <h3>{meditation.attributes.theme}</h3>
          </div>
          <div className="Details-wrapper">
            <div className="Organizer-div">
              <p>{meditation.attributes.organizer}</p>
            </div>
            <div className="Duration-div">
              <p>{meditation.attributes.duration} </p>
            </div>
          </div>
          <div className="Button-div">
            <button className="Start-meditation">Start Meditation</button>
          </div>
        </div>
        <DharmaTalks meditation={meditation} />
      </div>
    </div>
  );
};

export default Meditation;
