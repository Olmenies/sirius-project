// Imports
import {Container, Row, Col} from 'react-bootstrap';
import {Services} from '..';
import './styles.css'

// Component start
const Dashboard = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Services />
                </Col>
            </Row>
        </Container>
    )
}

// Export
export default Dashboard;