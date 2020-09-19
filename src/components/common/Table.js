import React, { useContext, useState, useEffect } from "react";
import _ from "lodash";

import { TableDataContext } from "../../context/TableDataContext";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
  const { state } = useContext(TableDataContext);
  const { items, sortColumn, columns } = state;

  const [activeColumns, setActiveColumns] = useState([]);

  useEffect(() => {
    getActiveColumns();
  }, [columns]);

  const getActiveColumns = () => {
    const newActiveColumns = columns
      .filter((item) => item.isShown)
      .map((item) => item.colName);

    setActiveColumns(newActiveColumns);
  };

  const getFiltredData = () => {
    let filtredData = items;
    if (sortColumn) {
      filtredData = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
    }
    return filtredData;
  };

  return (
    <div className="table-responsive pl-4 pr-4">
      {activeColumns.length == 0 && <h3>No column is selected</h3>}

      {getFiltredData() && (
        <table className="table">
          <TableHeader columns={activeColumns} />
          <TableBody data={getFiltredData()} columns={activeColumns} />
        </table>
      )}
    </div>
  );
};

export default Table;
