// Imports
import { InformationScreen, SidebarContainer } from '..';
import {Container, Row, Col} from 'react-bootstrap';

// Component start
const InformationScreenContainer = () => {
    return (
        <Container className="px-0 mx-0">
        <Row>
            <Col md='2' style={{ backgroundColor: '#f8f9fa' }} > <SidebarContainer /> </Col>
            <Col> <InformationScreen /> </Col>
        </Row>
    </Container>
    );
}

// Exports
export default InformationScreenContainer;