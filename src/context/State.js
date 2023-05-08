import { createContext, useContext, useEffect, useReducer } from "react";
import { setProperties, setSelectedLocation, setGuest } from "./Action";
import Reducer from "./Reducer";

const initialState = {
  properties: [],
  selectedLocations: null,
  selectedGuests: null,
  filterPanel: false,
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    setProperties(dispatch);
    setSelectedLocation(dispatch);
    setGuest(dispatch);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useState = () => {
  const { state, dispatch } = useContext(Context);
  return { ...state, dispatch };
};
