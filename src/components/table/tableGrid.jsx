import React from 'react';

const TableGrid = ({ gridSize, handleMove, activeCell }) => {
  let tableData = getRows(gridSize);
  const columns = tableData['columns'];
  let cellIndex = 0;
  return (
    <div className="container">
      <table className="table-bordered table-grid">
        <tbody>
          {tableData['rows'].map((row, rowIndex) => {
            console.log('rI', rowIndex);
            return (
              <tr key={row}>
                {tableData['rows'].map((column, colIndex) => {
                  console.log('cI', colIndex);
                  cellIndex += 1;
                  return (
                    <td
                      style={{
                        background:
                          (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
                          (rowIndex % 2 !== 0 && colIndex % 2 !== 0)
                            ? 'grey'
                            : 'white'
                      }}
                      key={column}
                      onFocus={handleMove}
                      className={
                        columns[cellIndex] === activeCell ? 'active-cell' : ''
                      }
                    >
                      &nbsp;
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const getRows = gridSize => {
  const rows = [];
  const columns = [];
  for (let index = 1; index <= gridSize; index++) {
    rows.push(index);
  }
  for (let index = 0; index <= gridSize * gridSize; index++) {
    columns.push(index);
  }
  return { rows: rows, columns: columns };
};

export default TableGrid;
