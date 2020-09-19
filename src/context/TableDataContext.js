import React, { useReducer, useEffect } from "react";
import tableDataReducer from "./reducers/tableDataReducer";
import { convertToUTC } from "../utils/dateHelper";
import { initialState, reducerVars } from "../config";

export const TableDataContext = React.createContext();
TableDataContext.displayName = "TableDataContext";

const { SORT, TOGGLE_FILTER, INPUT_CHANGE } = reducerVars;

export const TableDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableDataReducer, initialState);

  useEffect(() => {
    const newitems = state.items.map((item) => {
      item["created_at"] = convertToUTC(item["created_at"]);
      item["updated_at"] = convertToUTC(item["created_at"]);
      return item;
    });
    state.items = newitems;
  }, []);

  const onSort = (sortObj) => {
    dispatch({ type: SORT, payload: { ...sortObj } });
  };

  const toggleFilter = (column) => {
    dispatch({ type: TOGGLE_FILTER, payload: { ...column } });
  };

  const changeInput = (item, inputName, text) => {
    dispatch({ type: INPUT_CHANGE, payload: { item, inputName, text } });
  };

  const value = { state, onSort, toggleFilter, changeInput };

  return (
    <TableDataContext.Provider value={value}>
      {children}
    </TableDataContext.Provider>
  );
};
