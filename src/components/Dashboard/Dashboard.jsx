// Imports
import {Container, Row, Col} from 'react-bootstrap';
import {ServicesScreenContainer} from '..';
import './styles.css'

// Component start
const Dashboard = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <ServicesScreenContainer />
                </Col>
            </Row>
        </Container>
    )
}

// Export
export default Dashboard;