// Imports
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { AiFillDollarCircle, AiFillCheckCircle } from 'react-icons/ai';

import './styles.css';

// Component start
const Services = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [actualStatus, setActualStatus] = useState(''); //Desired status will be saved on actualStatus.value
    const [actualPrice, setActualPrice] = useState(0);
    

    const handleOnCloseModal = () => setIsModalVisible(false);
    const handleOnOpenModal = () => setIsModalVisible(true);
    const handleOnSubmit = (e, tempPrice) => {
        setActualPrice(parseInt(tempPrice))
        handleOnCloseModal();
    }

    const ServicesPriceModal = ({ value }) => {

        const [tempPrice, setTempPrice] = useState('');

        return (
            <Modal show={isModalVisible} onHide={handleOnCloseModal}>
                <Modal.Header>
                    <Modal.Title>Modificar precio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio actual: ${value}</Form.Label>
                    </Form.Group>
                    <Form>
                        <Form.Group className="mb-3" controlId="controlInput">
                            <Form.Label>Nuevo precio</Form.Label>
                            <Form.Control
                                type="number"
                                min={0}
                                placeholder={actualPrice}
                                autoFocus
                                onChange={e => setTempPrice(e.target.value)}
                                value={tempPrice}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOnCloseModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" type='button' form='myForm' onClick={(e) => handleOnSubmit(e, tempPrice)}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

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

    const CustomCard = ({ image, title, variable, extra }) => {
        return (
            <Card>
                <Card.Body>
                    <div className='customCardDiv'>
                        {image}
                        <Card.Text className='my-0'>
                            {title}: {variable}
                        </Card.Text>
                        {extra.map((el, i) => {
                            return (
                                {
                                    ...el,
                                    key: i
                                }
                            );
                        })}
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
            extra: [<ServicesStatusDropdown />],
            type: 'dropdown'
        },
        {
            image: <AiFillDollarCircle size={50} />,
            title: 'Precio',
            variable: actualPrice,
            extra: [<Button onClick={handleOnOpenModal}>Modificar</Button>, <ServicesPriceModal value={69} />],
            type: 'modal'
        }
    ];

    return (
        <Container>

            <ServicesPriceModal />

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
