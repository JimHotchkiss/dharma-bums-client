import React from "react";
import "./Meditation.css";
import DharmaTalk from "./DharmaTalk";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];
  console.log(meditation);
  return (
    <div className="Meditation-card">
      <div className="Content-div">
        <div className="Theme-div">
          <h3>Meditation Theme:</h3> <p>"{meditation.attributes.theme}"</p>
        </div>
        <div className="Organizer-div">
          <h3>Organizer:</h3> <p>{meditation.attributes.organizer}</p>
        </div>
        <div className="Duration-div">
          <h3>Duration:</h3> <p>{meditation.attributes.duration}</p>
        </div>
      </div>
      <div className="Timer-div">
        <div>
          <p>Timer Div</p>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
