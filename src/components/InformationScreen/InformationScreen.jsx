// Imports
import { Container, Row, Col } from 'react-bootstrap';
import { InformationCardContainer } from '../';
import { AiFillCar, AiFillDollarCircle } from 'react-icons/ai';
import { RiBillFill } from 'react-icons/ri'

// Component start
const InformationScreen = () => {

    const informationElements = [
        {
            image: <AiFillCar size={40} />,
            title: 'Total tránsito generado',
            variable: 10,
            extra: [],
        },
        {
            image: <AiFillCar size={40} />,
            title: 'Patentes reconocidas',
            variable: 10,
            extra: [],
        },
        {
            image: <AiFillCar size={40} />,
            title: 'No reconocidas',
            variable: 10,
            extra: [],
        },
        {
            image: <RiBillFill size={40} />,
            title: 'Multas emitidas',
            variable: 10,
            extra: [],
        },
        {
            image: <AiFillDollarCircle size={40} />,
            title: 'Solicitud de pagos emitidos',
            variable: 10,
            extra: [],
        },
        {
            image: <AiFillDollarCircle size={40} />,
            title: 'Total facturado',
            variable: 10,
            extra: [],
        }
    ]

    return (
        <Container>
            <Row>
                <Col className='text-left'>
                    <h2>Información</h2>
                    <p>Métricas de los servicios actuales</p>
                </Col>
            </Row>
            <Row>
                {
                    informationElements.map(el => {
                        return (
                            <Col className='col-md-4'>
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