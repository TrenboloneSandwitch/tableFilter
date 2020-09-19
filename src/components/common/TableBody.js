import React, { useContext } from "react";

import { getFromNow, format } from "../../utils/dateHelper";
import { TableDataContext } from "../../context/TableDataContext";

const TableBody = ({ data, columns }) => {
  const { changeInput } = useContext(TableDataContext);

  const getSelect = (item, column) => {
    let options = ["pause", "running"];
    return (
      <select
        value={item[column]}
        onChange={({ currentTarget }) =>
          changeInput(item, column, currentTarget.value)
        }
        onBlur={({ currentTarget }) =>
          changeInput(item, column, currentTarget.value)
        }
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const getInput = (item, column) => {
    return (
      <input
        type={column === "items_count" ? "number" : "text"}
        className="form-control"
        id="exampleInputEmail1"
        value={item[column]}
        onChange={({ currentTarget }) => {
          if (column === "items_count" && isNaN(parseInt(currentTarget.value)))
            return;

          changeInput(item, column, currentTarget.value);
        }}
      />
    );
  };

  const renderCell = (item, column) => {
    if (column == "updated_at") return getFromNow(item["updated_at"]);
    else if (column == "adwords_status") return getSelect(item, column);
    else if (column == "id") return item[column];
    else if (column == "created_at") return format(item[column]);
    else return getInput(item, column);
  };

  const createKey = (item, column) => {
    return item.id + column;
  };

  return (
    <tbody>
      {data &&
        data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={createKey(item, column)}>{renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
