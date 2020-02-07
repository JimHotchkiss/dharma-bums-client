import React from "react";
import "./Meditation.css";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];

  return (
    <div className="Meditation-wrapper">
      <div className="Card-wrapper">
        <div className="Square-one">Square One</div>
        <div className="Square-two">Square Two</div>
      </div>
    </div>
  );
};

export default Meditation;
