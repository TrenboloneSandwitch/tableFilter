import React, { useContext } from "react";
import { TableDataContext } from "../../context/TableDataContext";

const TableHeader = ({ columns }) => {
  const { state, onSort } = useContext(TableDataContext);
  const { sortColumn } = state;

  const raiseSort = (path) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (column !== sortColumn.path) return null;
    return (
      <i
        className={`fa fa-sort-${sortColumn.order === "asc" ? "asc" : "desc"}`}
      ></i>
    );
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return (
            <th
              style={{ textTransform: "capitalize", fontWeight: 500 }}
              className="clickable"
              key={column}
              onClick={() => raiseSort(column)}
            >
              {" "}
              {column.replace("_", " ")} {renderSortIcon(column)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
