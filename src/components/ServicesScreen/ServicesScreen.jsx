// Imports
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { AiFillDollarCircle, AiFillCheckCircle } from 'react-icons/ai';
import { ServicesCardContainer } from '../';
import { useAppContext } from '../../contexts/appContext';

import './styles.css';

// Component start
const ServicesScreen = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [actualStatus, setActualStatus] = useState(false); //Desired status will be saved on actualStatus.value
    const [actualPrice, setActualPrice] = useState(0);

    const { updateStatus, updatePrice } = useAppContext();

    const handleOnCloseModal = () => setIsModalVisible(false);
    const handleOnOpenModal = () => setIsModalVisible(true);
    const handleOnSubmit = (e, tempPrice) => {
        console.log(e);
        console.log(tempPrice);
        !isNaN(tempPrice) && setActualPrice(parseFloat(tempPrice));
        handleOnCloseModal();
    }

    const ServicesPriceModal = ({ value }) => {

        const [tempPrice, setTempPrice] = useState();

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
                                required
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

        const getSelectedValue = (e = true) => {
            setActualStatus(e);
            return (e);
        }

        return (
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '7rem' }}>
                    {actualStatus ? 'Activo' : 'Inactivo'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        as='button'
                        value={true}
                        onClick={e => getSelectedValue(true)}
                    >
                        Activo</Dropdown.Item>
                    <Dropdown.Item
                        value={false}
                        onClick={e => getSelectedValue(false)}
                    >
                        Inactivo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const servicesElements = [
        {
            image: <AiFillCheckCircle size={50} />,
            title: 'Estado',
            variable: '',
            extra: [<ServicesStatusDropdown />],
            type: 'dropdown'
        },
        {
            image: <AiFillDollarCircle size={50} />,
            title: 'Precio',
            variable: actualPrice,
            extra: [
                <Button onClick={handleOnOpenModal}>Modificar</Button>,
                <ServicesPriceModal value={actualPrice} />
            ],
            type: 'modal'
        }
    ];

    useEffect(() => {
        updateStatus(actualStatus);
        updatePrice(actualPrice);
    }, [actualPrice, actualStatus]);

    return (
        <Container className='mt-2' >
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
