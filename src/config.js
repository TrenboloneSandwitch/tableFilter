import data from "./data.json";

export const initialState = {
  items: data,
  sortColumn: {
    path: "id",
    order: "asc",
  },
  activeColumns: [
    "id",
    "name",
    "campaign_name",
    "adgroup_name",
    "created_at",
    "updated_at",
    "type",
    "adwords_status",
    "items_count",
  ],
};

export const reducerVars = {
  SORT: "SORT",
  GET_ALL: "GET_ALL",
  FILTER_DATA: "FILTER_DATA",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
};
