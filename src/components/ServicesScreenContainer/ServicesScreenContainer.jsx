// Imports
import { ServicesScreen, SidebarContainer } from "../index";
import { Container, Col, Row } from 'react-bootstrap';

// Component start
const ServicesScreenContainer = () => {

    return (
        <Container className="px-0 mx-0">
            <Row>
                <Col md='2' style={{ backgroundColor: '#3f51b5', padding: 0 }} > <SidebarContainer /> </Col>
                <Col> <ServicesScreen /> </Col>
            </Row>
        </Container>
    );
}

// Exports
export default ServicesScreenContainer;