// Imports
import { ServicesScreen, SidebarContainer } from "../index";
import { Container, Col, Row } from 'react-bootstrap';

// Component start
const ServicesScreenContainer = () => {
    return (
        <div className="px-0">
            <Container className="px-0 mx-0">
                <Row>
                    <Col md='2' style={{ backgroundColor: '#f8f9fa' }} > <SidebarContainer /> </Col>
                    <Col> <ServicesScreen /> </Col>
                </Row>
            </Container>
        </div>
    );
}

// Exports
export default ServicesScreenContainer;