// Imports
import { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

// Component start
const LogsScreen = () => {

    const Table = ({ columns, data }) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            //rows,

            page, // Instead of using 'rows', we'll use page,
            // which has only the rows for the active page

            // The rest of these things are super handy, too ;)
            canPreviousPage,
            canNextPage,
            pageOptions,
            pageCount,
            gotoPage,
            nextPage,
            previousPage,
            setPageSize,
            state: { pageIndex, pageSize },
            prepareRow,
        } = useTable(
            {
                columns,
                data,
                initialState: { pageIndex: 2 },
            },
            useSortBy,
            usePagination
        )


        return (
            <div>

                <pre>
                    <code>
                        {JSON.stringify(
                            {
                                pageIndex,
                                pageSize,
                                pageCount,
                                canNextPage,
                                canPreviousPage,
                            },
                            null,
                            2
                        )}
                    </code>
                </pre>

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
                        {page.map(
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


                <div className="pagination">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <span>
                        | Go to page:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px' }}
                        />
                    </span>{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>


            </div>
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
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
        },
        {
            idCol: '01',
            msgCol: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quas?',
            tmpCol: '69',
            excepCol: 'Lorem ipsum dolor sit amet.'
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