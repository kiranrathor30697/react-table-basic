import React, { useMemo } from 'react'
import { useTable } from 'react-table'
 
function App() {
  let data = useMemo(
    () => [
      {
        col1: 'Kiran',
        col2: 'Rathor',
        col3: '7098272718'
      },
      {
        col1: 'Anjali',
        col2: 'Rathor',
        col3: '7664436786'
      },
      {
        col1: 'Rudransh',
        col2: 'Rathor',
        col3: '8765544376'
      },
    ],
    []
  )

  let columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Surname',
        accessor: 'col2',
      },
      {
        Header: 'Mobile No',
        accessor: 'col3',
      },
    ],
    []
  )

  
   let tableObject = useTable({ columns, data })

   let  {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableObject 

  return (
    <table {...getTableProps()} style={{border: '1px solid #000',margin: '100px auto'}}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{border: '1px solid #000',padding: '20px'}}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} style={{border: '1px solid #000',padding: '10px'}} >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App;
