// Imports
import { Table } from '../';

// Component start
const TableContainer = ({ data }) => {

    const columns = [
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
    ]

    return (
        <Table data={data} columns={columns} />
    );
}

// Exports
export default TableContainer