// Imports
import { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { TableContainer } from '..';

// Component start
const LogsScreen = ({data}) => {


    return (
        <div>
            <TableContainer data={data} />
        </div>
    );
}

// Exports
export default LogsScreen;