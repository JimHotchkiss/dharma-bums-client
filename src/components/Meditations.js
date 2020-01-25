import React from "react";

const Meditations = props => {
  const meditationList = props.meditations.map(meditation => (
    <li key={meditation.id}>
      <a href="#">
        {meditation.attributes.theme} {meditation.attributes.duration}
      </a>
    </li>
  ));
  return (
    <div>
      <h3>{meditationList}</h3>
    </div>
  );
};
export default Meditations;
