import React from "react";
import { Link } from "react-router-dom";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];

  return (
    <div className="Meditation-card">
      {meditation ? (
        <div
          className="Meditation-duration
      "
        >
          <p>{meditation.attributes.duration}</p>
        </div>
      ) : null}
      {meditation ? (
        <div
          className="Meditation-theme
      "
        >
          <p>{meditation.attributes.theme}</p>
        </div>
      ) : null}
      {meditation ? (
        <div
          className="Meditation-organizer
      "
        >
          <p>{meditation.attributes.organizer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Meditation;
