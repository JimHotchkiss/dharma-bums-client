export const addMeditation = meditation => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/meditations", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify(meditation)
    })
      .then(response => response.json())
      .then(meditation =>
        dispatch({ type: "ADD_MEDITATION", payload: meditation })
      );
  };
};
