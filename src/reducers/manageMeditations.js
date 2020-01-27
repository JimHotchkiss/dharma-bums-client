const manageMeditations = (
  state = {
    meditations: [],
    completed: false,
    loading: false,
    duration: 0
  },
  action
) => {
  switch (action.type) {
    case "LOADING_MEDITATIONS":
      return {
        ...state,
        meditations: [...state.meditations],
        loading: true
      };
    case "ADD_MEDITATIONS":
      return {
        ...state,
        meditations: action.meditations.data,
        loading: false
      };

    default:
      return state;
  }
};

export default manageMeditations;
