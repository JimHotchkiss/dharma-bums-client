import React from "react";
import "./Meditation.css";
import TimerContainer from "../containers/TimerContainer";
import DharmaTalk from "./DharmaTalk";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];
  return (
    <div className="Meditation-card">
      <div className="Content-div">
        <div className="Theme-div">
          <h3>Meditation Theme:</h3>{" "}
          <p className="Content-text">"{meditation.attributes.theme}"</p>
        </div>
        <div className="Organizer-div">
          <h3>Organizer:</h3>{" "}
          <p className="Content-text">{meditation.attributes.organizer}</p>
        </div>
        <div className="Duration-div">
          <h3>Duration:</h3>{" "}
          <p className="Content-text">{meditation.attributes.duration}</p>
        </div>
      </div>
      <div className="Timer-wrapper">
        {/* <DharmaTalk /> */}
        <TimerContainer meditation={props} />
      </div>
    </div>
  );
};

export default Meditation;
