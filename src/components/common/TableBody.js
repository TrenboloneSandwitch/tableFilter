import React, { useContext } from "react";
import _ from "lodash";
import { TableDataContext } from "../../context/TableDataContext";

const TableBody = ({ data }) => {
  const { state } = useContext(TableDataContext);
  const { activeColumns: columns } = state;

  const renderCell = (item, column) => {
    return _.get(item, column);
  };

  const createKey = (item, column) => {
    return item.id + column;
  };

  return (
    <React.Fragment>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={createKey(item, column)}>
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </React.Fragment>
  );
};

export default TableBody;
