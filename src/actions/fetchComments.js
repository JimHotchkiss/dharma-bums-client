export const fetchComments = meditation => {
  console.log(meditation);
  return dispatch => {
    dispatch({ type: "LOADING_COMMENTS" });
    // fetch("http://localhost:3000/api/v1/meditations/mediation_id/comments/comment_id")
    fetch("http://localhost:3000/api/v1/meditations")
      .then(response => response.json())
      .then(comments => dispatch({ type: "FETCH_COMMENTS", comments }));
  };
};
