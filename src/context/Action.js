import dummy from "../../src/assets/stays.json";

export function setProperties(dispatch) {
  const data = dummy;
  dispatch({
    action: "SET_PROPERTIES",
    payload: data,
  });
}

export function setSelectedLocation(dispatch, payload) {
  dispatch({
    action: "SET_SELECTED_LOCATION",
    payload,
  });
}

export function setGuest(dispatch, payload) {
  dispatch({
    action: "SET_GUEST",
    payload,
  });
}

export function setFilterPanel(dispatch, payload) {
  dispatch({
    action: "SET_FILTER_PANEL",
    payload,
  });
}
