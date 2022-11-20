// Imports
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
            <Row>
                <Col md='2' style={{ backgroundColor: '#3f51b5', padding: 0 }} > <SidebarContainer /> </Col>
                <Col> <ServicesScreen data={data} /> </Col>
            </Row>
        )
    }
    
    useEffect(() => {
        getData();
    }, []);

const CurrentComponent = () => <div>Current component</div>; // To be a spinner

return (
        <Container className="px-0 mx-0">
            {isLoading  ? <CurrentComponent /> : <TempComp /> }
        </Container>
    );
}

// Exports
export default ServicesScreenContainer;