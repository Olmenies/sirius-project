// Imports
import { useState, useEffect } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { ServicesScreen, SidebarContainer } from "../index";

// Component start
const ServicesScreenContainer = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        fetch('./data/services.json',
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
    const TempComp = () => {
        return (
            <Row style={{height:'100%'}}>
                <Col> <ServicesScreen data={data} /> </Col>
            </Row>
        )
    }
    
    useEffect(() => {
        getData();
    }, []);

return (
        <Container fluid className="px-0 mx-0" style={{height:'100%'}} >
            {isLoading  ? <Spinner animation="grow" /> : <TempComp /> }
        </Container>
    );
}

// Exports
export default ServicesScreenContainer;