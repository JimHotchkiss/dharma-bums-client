const manageMeditations = (
  state = {
    meditations: [],
    completed: false,
    loading: false
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
    case "FETCH_MEDITATIONS":
      return {
        ...state,
        meditations: action.meditations.data,
        loading: false
      };
    case "ADD_MEDITATION":
      return {
        ...state,
        meditations: [...state.meditations, action.payload]
      };
    default:
      return state;
  }
};

export default manageMeditations;
