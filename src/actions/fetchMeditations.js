export const fetchMeditations = () => {
  console.log("Inside fetch");
  return dispatch => {
    dispatch({ type: "LOADING_MEDITATIONS" });
    fetch("http://localhost:3000/api/v1/meditations")
      .then(response => response.json())
      .then(meditations =>
        dispatch({ type: "FETCH_MEDITATIONS", meditations })
      );
  };
};
