export const fetchMeditations = () => {
  return dispatch => {
    dispatch({ type: "LOADING_MEDITATIONS" });
    fetch("http://localhost:3000/api/v1/meditations")
      .then(response => response.json())
      .then(meditations => dispatch({ type: "ADD_MEDITATIONS", meditations }));
  };
};
