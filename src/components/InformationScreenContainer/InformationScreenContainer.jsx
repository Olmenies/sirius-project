// Imports
import { InformationScreen, SidebarContainer } from '..';
import {Container, Row, Col} from 'react-bootstrap';

// Component start
const InformationScreenContainer = () => {
    return (
        <Container className="px-0 mx-0">
        <Row>
            <Col md='2' style={{ backgroundColor: '#3f51b5', padding: 0 }} > <SidebarContainer /> </Col>
            <Col> <InformationScreen/> </Col>
        </Row>
    </Container>
    );
}

// Exports
export default InformationScreenContainer;