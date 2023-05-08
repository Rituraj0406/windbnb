export default function Reducer(state, dispatch) {
  const { action, payload } = dispatch;

  switch (action) {
    case "SET_PROPERTIES":
      return { ...state, properties: payload };

    case "SET_SELECTED_LOCATION":
      return { ...state, selectedLocations: payload };

    case "SET_GUEST":
      return { ...state, selectedGuests: payload };

    case "SET_FILTER_PANEL":
      return { ...state, filterPanel: payload };
    default:
      return state;
  }
}
