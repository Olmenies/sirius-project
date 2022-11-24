// Imports
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

// Component start
const LogsScreen = () => {

    const Table = ({ columns, data }) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable(
            {
                columns,
                data,
            },
            useSortBy
        )
        const firstPageRows = rows.slice(0, 20)


        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {firstPageRows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }


    const columns = useMemo(() => [
        {
            Header: 'ID',
            accessor: 'idCol'
        },
        {
            Header: 'Mensaje',
            accessor: 'msgCol'
        },
        {
            Header: 'Timestamp',
            accessor: 'tmpCol'
        },
        {
            Header: 'Exception',
            accessor: 'excepCol'
        }
    ])

    const data = [
        {
            idCol:'01',
            msgCol:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol:'69',
            excepCol:'Lorem ipsum dolor sit amet.'
        },
        {
            idCol:'01',
            msgCol:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol:'69',
            excepCol:'Lorem ipsum dolor sit amet.'
        }
    ]


    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    );
}

// Exports
export default LogsScreen;