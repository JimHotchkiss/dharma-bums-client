import React from "react";
import { Link } from "react-router-dom";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];

  return (
    <div>
      {meditation ? meditation.attributes.duration : null}
      <p>{meditation ? meditation.attributes.theme : null}</p>
      <p>{meditation ? meditation.attributes.organizer : null}</p>
      <div>
        <Link to={`/meditations`}>Back to Meditations</Link>
      </div>
    </div>
  );
};

export default Meditation;
