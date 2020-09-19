import data from "./data.json";

export const initialState = {
  items: data,
  sortColumn: {
    path: "id",
    order: "asc",
  },

  columns: [
    { colName: "id", isShown: true },
    { colName: "name", isShown: true },
    { colName: "campaign_name", isShown: false },
    { colName: "adgroup_name", isShown: false },
    { colName: "created_at", isShown: true },
    { colName: "updated_at", isShown: true },
    { colName: "type", isShown: false },
    { colName: "adwords_status", isShown: false },
    { colName: "items_count", isShown: true },
  ],
};

export const reducerVars = {
  SORT: "SORT",
  TOGGLE_FILTER: "TOGGLE_FILTER",
  INPUT_CHANGE: "INPUT_CHANGE",
};
