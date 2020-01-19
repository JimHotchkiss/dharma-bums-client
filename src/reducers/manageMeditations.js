export default function manageMeditations(
  state = {
    meditations: []
  },
  action
) {
  switch (action.type) {
    case "ADD_MEDITATION":
      return {
        ...state,
        meditations: [...state.meditations, action.meditation]
      };

    default:
      return state;
  }
}
