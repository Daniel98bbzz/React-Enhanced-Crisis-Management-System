import React, { createContext, useReducer } from "react";

const initialState = {
  sessions: [],
  selected: {},
};

const sessionReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, sessions: action.payload };

    case "ADD":
      return { ...state, sessions: [...state.sessions, action.payload] };

    case "SELECT":
      return { ...state, selected: action.payload };

    case "REMOVE":
      return {
        ...state,
        sessions: state.sessions.filter((item) => item._id !== action.payload),
        selected: {},
      };
    case "UPDATE":
      return {
        ...state,
        sessions: state.sessions.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        selected: {},
      };

    default:
      return state;
  }
};

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
