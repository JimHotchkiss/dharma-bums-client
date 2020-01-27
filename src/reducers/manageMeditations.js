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
    case "FETCH_MEDITATIONS":
      return {
        ...state,
        meditations: action.meditations.data,
        loading: false
      };
    case "ADD_MEDITATION":
      console.log(action.payload, state);
      return {
        ...state,
        meditations: [...state.meditations, action.payload],
        loading: false
      };

    default:
      return state;
  }
};

export default manageMeditations;
