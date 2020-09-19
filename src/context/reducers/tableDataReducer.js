import { reducerVars, initialState } from "../../config";
import { currentTime } from "../../utils/dateHelper";

const { SORT, TOGGLE_FILTER, INPUT_CHANGE } = reducerVars;

const tableDataReducer = (state = initialState, action) => {
  if (action.type === SORT) {
    let sortColumn = action.payload;
    return { sortColumn, ...state };
  }

  if (action.type === TOGGLE_FILTER) {
    let column = { ...action.payload, isShown: !action.payload.isShown };
    let newColumns = state.columns.map((item) =>
      item.colName == column.colName ? column : item
    );
    return { ...state, columns: newColumns };
  }

  if (action.type === INPUT_CHANGE) {
    let { item, inputName, text } = action.payload;

    let newItems = state.items.map((oldItem) => {
      if (oldItem == item) {
        item[inputName] = text;
        item["updated_at"] = currentTime();
        return item;
      }
      return oldItem;
    });
    return { ...state, items: newItems };
  }

  return state;
};

export default tableDataReducer;
