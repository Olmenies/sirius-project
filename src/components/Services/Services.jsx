// Imports
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { AiFillDollarCircle, AiFillCheckCircle } from 'react-icons/ai';

import './styles.css';

// Component start
const Services = () => {
    const [actualStatus, setActualStatus] = useState(''); //Desired status will be saved on actualStatus.value

    const ServicesStatusDropdown = () => {

        const getSelectedValue = (e) => {
            setActualStatus(e.target);
        }

        return (
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '7rem' }}>
                    {actualStatus.innerHTML ? actualStatus.innerHTML : 'Modificar'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        as='button'
                        value='active'
                        onClick={e => getSelectedValue(e)}
                    >
                        Activo</Dropdown.Item>
                    <Dropdown.Item
                        value='inactive'
                        onClick={e => getSelectedValue(e)}
                    >
                        Inactivo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const CustomCard = ({ image, title, variable, extra, type }) => {
        // Conditional styling has to be improved once I'm less burned out
        return (
            <Card
                style={{
                    backgroundColor: (type === 'dropdown' && variable === 'Activo')
                        ? '#D5E8D4'
                        : (type === 'dropdown' && variable === 'Inactivo') && '#DB2843'
                }}
            >
                <Card.Body>
                    <div className='customCardDiv'>
                        {image}
                        <Card.Text className='my-0'>
                            {title}: {variable}
                        </Card.Text>
                        {extra}
                    </div>
                </Card.Body>
            </Card>
        );
    }

    const servicesElements = [
        {
            image: <AiFillCheckCircle size={50} />,
            title: 'Estado',
            variable: 'Activo',
            extra: <ServicesStatusDropdown />,
            type: 'dropdown'
        },
        {
            image: <AiFillDollarCircle size={50} />,
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
                {servicesElements.map((el, i) => {
                    return (
                        <Col key={i}>
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
