// Imports
import { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { Container, Row, Col } from 'react-bootstrap';
import { TableContainer } from '..';

// Component start
const LogsScreen = ({ data }) => {


    return (


        <Container className='mt-2 pl-4' >

            <Row>
                <Col className='text-left mb-4'>
                    <h2>Logs</h2>
                    <p>Vista de los logs del sistema</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <TableContainer data={data} />
                </Col>
            </Row>
        </Container>
    );
}

// Exports
export default LogsScreen;