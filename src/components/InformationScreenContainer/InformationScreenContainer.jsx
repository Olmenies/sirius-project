// Imports
import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { InformationScreen, SidebarContainer } from '../';

// Component start
const InformationScreenContainer = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        fetch('./data/information.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    const TempComp = () => {
        return (
            <Row style={{ height: '100%' }}>
                <Col md='10'> <InformationScreen data={data} /> </Col>
            </Row>
        )
    }

    return (
        <Container fluid className="px-0 mx-0" style={{ height: '100%' }} >
            {isLoading ? <Spinner animation="grow" /> : <TempComp />}
        </Container>
    );
}

// Exports
export default InformationScreenContainer;