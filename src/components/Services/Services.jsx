// Imports
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { AiFillDollarCircle, AiFillCheckCircle } from 'react-icons/ai';

import './styles.css';

// Component start
const Services = () => {

    const CustomDropdown = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Modificar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Activo</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Inactivo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const CustomCard = ({ image, title, variable, extra, type }) => {
        // Conditional styling has to be improved once I'm less burned out
        return (
            <Card
                style={{
                    backgroundColor: (type === 'dropdown' && variable === 'Activo' )
                    ? '#D5E8D4'
                    : (type === 'dropdown' && variable === 'Inactivo') && 'red'
                }}
            >
                <Card.Body>
                    <Card.Text className='customCardText'>
                        {image}
                        <span>{title}: {variable}</span>
                        {extra}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    const servicesElements = [
        {
            image: <AiFillCheckCircle />,
            title: 'Estado',
            variable: 'Activo',
            extra: <CustomDropdown />,
            type: 'dropdown'
        },
        {
            image: <AiFillDollarCircle />,
            title: 'Precio',
            variable: '$69',
            extra: <Button>Modificar</Button>,
            type: 'modal'
        }
    ];

    return (
        <Container>
            <Row>
                <Col className='text-left'>
                    <h2>Servicios</h2>
                    <p>Vista rápida de los servicios actuales</p>
                </Col>
            </Row>

            <Row>
                {servicesElements.map(el => {
                    return (
                        <Col>
                            <CustomCard
                                image={el.image}
                                title={el.title}
                                variable={el.variable}
                                extra={el.extra}
                                type={el.type}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

// Export
export default Services;
