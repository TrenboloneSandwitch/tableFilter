import React, { useContext } from "react";
import { TableDataContext } from "../context/TableDataContext";

function Filters() {
  const { state } = useContext(TableDataContext);

  return (
    <div>
      <h1>Filters</h1>
    </div>
  );
}

export default Filters;
