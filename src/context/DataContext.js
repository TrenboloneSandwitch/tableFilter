import React, { createContext, useReducer } from "react";
import data from "./data.json";

export const DataContext = createContext();

const TOGGLE_CHECKBOX = "TOOGLE_CHECKBOX";

const reducer = (state = initialState, action) => {
  // TOGGLE CHECKBOX REDUCER

  if (action.type === TOGGLE_CHECKBOX) {
    const todos = state.todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    console.log("tu");
    return { ...state, todos };
  }

  return state;
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const todos = state.todos;

  const toggleComplete = (id) => {
    dispatch({
      type: TOGGLE_CHECKBOX,
      payload: { id },
    });
  };

  const value = { todos, toggleComplete };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
