// Imports
import { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import BTable from 'react-bootstrap/Table';
import { ButtonToolbar, ButtonGroup, Button, Container, Row, Col, Form } from 'react-bootstrap';
import './styles.css';


// Component start
const Table = ({ data, columns }) => {

    const DefaultColumnFilter = ({
        column: { filterValue, preFilteredRows, setFilter },
    }) => {
        const count = preFilteredRows.length

        return (
            <input
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value || undefined)
                }}
                placeholder={`Buscar en ${count} registros...`}
            />
        )
    }

    const defaultColumn = useMemo(
        () => ({
            Filter: DefaultColumnFilter,
        }),
        []
    );

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
            initialState: { pageIndex: 0 },
            defaultColumn,
        },
        useFilters,
        useSortBy,
        usePagination,
    )

    return (
        <Container className='mb-5'>

            <pre style={{ display: 'none' }}>
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

            <Row>
                <BTable striped bordered hover size="sm" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    // Add the sorting props to control sorting. For this example
                                    // we can add them into the header props
                                    <th>
                                        <div  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            {/* Add a sort direction indicator */}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? ' 🔽'
                                                        : ' 🔼'
                                                    : ''}
                                            </span>
                                        </div>
                                        {/* Render the columns filter UI */}
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
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
                </BTable>

            </Row>
            <Row className="pagination align-items-center">

                <Col>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                {'<<'}
                            </Button>{' '}
                            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                {'<'}
                            </Button>{' '}
                            <Button onClick={() => nextPage()} disabled={!canNextPage}>
                                {'>'}
                            </Button>{' '}
                            <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                {'>>'}
                            </Button>{' '}
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>

                <Col>
                    <span>
                        Página{' '}
                        <strong>
                            {pageIndex + 1} de {pageOptions.length}
                        </strong>{' '}
                    </span>
                </Col>

                <Col className='d-flex flex-row align-items-center justify-content-around'>
                    <span>Ir a la página:</span>
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                        className="form-control"
                    />
                </Col>


                <Col>
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Mostrar {pageSize}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row>
        </Container>
    )
}

// Exports
export default Table;
