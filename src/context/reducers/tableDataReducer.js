import { reducerVars, initialState } from "../../config";
const { GET_ALL, SORT } = reducerVars;

const tableDataReducer = (state = initialState, action) => {
  if (action.type === SORT) {
    let sortColumn = action.payload;
    return { sortColumn, ...state };
  }

  return state;
};

export default tableDataReducer;
