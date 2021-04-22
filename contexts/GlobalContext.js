import React, { createContext, useReducer, useEffect } from "react";
import { globalReducer } from "./GlobalReducer";

export const GlobalContext = createContext();

export function saveToSessionalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

export function loadFromSessionalStorage() {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const GlobalContextProvider = (props) => {
  const initialState = {
    option1: { id: 1, text: "opt1" },
    option2: { id: 2, text: "opt2" },
    id: '-1'
  };

   const persistedState = loadFromSessionalStorage();

   console.log('Before Reducer, persistedState =', persistedState)

  // Initialise reducers
  const [state, dispatch] = useReducer(
    globalReducer,
    persistedState || initialState
  );

  React.useEffect(() => {
    saveToSessionalStorage(state);
  }, [state]);

  function setOption1(data) {
    dispatch({
      type: "SET_OPTION1",
      payload: data,
    });
  }

  function setOption2(data) {
    dispatch({
      type: "SET_OPTION2",
      payload: data,
    });
  }

  function setId(data) {
    dispatch({
      type: 'SET_ID',
      payload: data
    })
  }

  return (
    <GlobalContext.Provider value={{ state, setOption1, setOption2, setId }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
