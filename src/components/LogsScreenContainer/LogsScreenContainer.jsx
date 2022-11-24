// Imports
import { useState, useEffect } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { LogsScreen } from '../';


// Component start
const LogsScreenContainer = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getData = () => {
        fetch('./data/logs.json',
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
                console.log(data);
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
                <Col> <LogsScreen data={data} /> </Col>
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
export default LogsScreenContainer;