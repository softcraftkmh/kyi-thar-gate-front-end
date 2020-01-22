import React, { useState, useEffect, useMemo, useCallback } from "react";
import _ from "lodash";
import { useTable } from "react-table";

import "./styles.scss";

const EditableCell = ({
  cell: { value: initialValue },
  row: { index },
  column: { id },
  updateMyData
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  );
};

const defaultColumn = {
  Cell: EditableCell
};

function Table({ columns, data, updateMyData, delMyData }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateMyData
    },
    hooks => {
      hooks.flatColumns.push(columns => {
        return [
          ...columns,
          {
            Header: () => <div>Actions</div>,
            Cell: ({ row }) => (
              <button className="app-btn red" onClick={() => delMyData(row)}>
                Del
              </button>
            )
          }
        ];
      });
    }
  );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              return (
                <th className={column.className} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function MyTable({ data, setData }) {
  const columns = useMemo(
    () => [
      {
        Header: "No.",
        accessor: (row, i) => i + 1,
        className: "voucherTable__no"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Quantity",
        accessor: "quantity"
      },
      {
        Header: "Price",
        accessor: "price"
      }
    ],
    [data]
  );

  const updateMyData = useCallback(
    (index, id, value) => {
      const newData = _.cloneDeep(data);
      newData[index][id] = value;
      setData(newData);
    },
    [data]
  );

  const delMyData = useCallback(
    row => {
      const newData = _.cloneDeep(data);
      newData.splice(row.index, 1);
      setData(newData);
    },
    [data]
  );

  return (
    <>
      {_.isEmpty(data) ? (
        <section className="voucherTable__noDataInformation-container">
          <blockquote>No Data Yet</blockquote>
        </section>
      ) : (
        <Table
          columns={columns}
          data={data}
          updateMyData={updateMyData}
          delMyData={delMyData}
        />
      )}
    </>
  );
}

export default MyTable;
