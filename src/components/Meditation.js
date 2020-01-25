import React from "react";
const Meditation = props => {
  let meditation = props.meditations[props.match.params.id - 1];
  console.log(meditation);

  return (
    <div>
      <h3>{meditation ? meditation.attributes.theme : null}</h3>
    </div>
  );
};
export default Meditation;
