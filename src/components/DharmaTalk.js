import React from "react";

const DharmaTalk = props => {
  const comments = props.meditation.attributes.comments.map(comment => (
    <p key={comment.id}>{comment.content}</p>
  ));
  return (
    <div className="Dharma-talk-field">
      <h3>Dharma Talk</h3>
      {comments}
    </div>
  );
};
export default DharmaTalk;
