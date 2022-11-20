// Imports
import { Container, Row, Col } from 'react-bootstrap';
import { ServicesCardContainer } from '../';

import './styles.css';

// Component start
const ServicesScreen = ({data}) => {

    return (
        <Container className='mt-2 pl-4' >

            <Row>
                <Col className='text-left mb-4'>
                    <h2>Servicios</h2>
                    <p>Vista rápida de los servicios actuales</p>
                </Col>
            </Row>

            <Row>
                {data.map((el, i) => {
                    return (
                        <Col key={i}>
                            <ServicesCardContainer
                                el={el}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

// Export
export default ServicesScreen;
