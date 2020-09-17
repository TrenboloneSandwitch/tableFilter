import React, { useEffect, useReducer } from "react";
import tableDataReducer from "./reducers/tableDataReducer";

import { initialState, reducerVars } from "../config";

export const TableDataContext = React.createContext();
TableDataContext.displayName = "TableDataContext";

const { GET_ALL, SORT } = reducerVars;

export const TableDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableDataReducer, initialState);

  const onSort = (sortObj) => {
    dispatch({ type: SORT, payload: { ...sortObj } });
  };

  const value = { state, onSort };

  return (
    <TableDataContext.Provider value={value}>
      {children}
    </TableDataContext.Provider>
  );
};
