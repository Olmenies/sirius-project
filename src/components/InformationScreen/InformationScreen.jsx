// Imports
import { Container, Row, Col } from 'react-bootstrap';
import { InformationCardContainer } from '../';
import { AiFillCar, AiFillDollarCircle } from 'react-icons/ai';
import { RiBillFill } from 'react-icons/ri'

// Component start
const InformationScreen = ({ data }) => {
    return (
        <Container className='mt-2'>
            <Row>
                <Col className='text-left'>
                    <h2>Información</h2>
                    <p>Métricas de los servicios actuales</p>
                </Col>
            </Row>
            <Row>
                {
                    data.map((el, i) => {
                        return (
                            <Col className='col-md-4' key={i}>
                                <InformationCardContainer el={el} />
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

// Exports
export default InformationScreen;