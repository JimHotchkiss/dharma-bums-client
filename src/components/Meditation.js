import React from "react";
import { Link } from "react-router-dom";

const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];

  return (
    <div>
      <h3>{meditation ? meditation.attributes.theme : null}</h3>
      <div>
        <Link to={`/meditations`}>Back to Meditations</Link>
      </div>
    </div>
  );
};
export default Meditation;
