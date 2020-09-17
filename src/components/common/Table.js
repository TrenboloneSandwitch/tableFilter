import React, { useContext } from "react";
import _ from "lodash";

import { TableDataContext } from "../../context/TableDataContext";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
  const { state } = useContext(TableDataContext);

  const { items, sortColumn } = state;

  const getFiltredData = () => {
    let filtredData = items;
    if (sortColumn) {
      filtredData = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
    }
    return filtredData;
  };

  return (
    <div className="table-responsive">
      {getFiltredData() && (
        <table className="table">
          <TableHeader />
          <TableBody data={getFiltredData()} />
        </table>
      )}
    </div>
  );
};

export default Table;
