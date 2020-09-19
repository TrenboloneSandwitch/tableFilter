import React, { useContext } from "react";
import { TableDataContext } from "../context/TableDataContext";

function Filters() {
  const { state, toggleFilter } = useContext(TableDataContext);
  const { columns } = state;

  const raiseChange = (item) => {
    toggleFilter(item);
  };

  return (
    <div className="p-4 bg-light d-flex flex-column align-items-center">
      <h2 className="mb-1" style={{ fontWeight: 100 }}>
        Filters
      </h2>
      <form className="form-inline">
        {columns.map((item) => (
          <div key={`filter-${item.colName}`} className="m-2">
            {" "}
            <input
              type="checkbox"
              id="accept"
              checked={item.isShown}
              onChange={() => raiseChange(item)}
            />
            <span onClick={() => raiseChange(item)}>
              {" "}
              {item.colName.replace("_", " ")}
            </span>{" "}
          </div>
        ))}
      </form>{" "}
    </div>
  );
}

export default Filters;
