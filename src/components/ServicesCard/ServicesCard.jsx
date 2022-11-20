// Imports
import { createElement, useState, useEffect } from 'react';
import { Card, Button, Modal, Form} from 'react-bootstrap';
import { DynamicIconContainer, CustomDropdownContainer } from '../';
import { useAppContext } from '../../contexts/appContext';
import './styles.css';


// Component start
const ServicesCard = ({ icon, title, variable, extra, type }) => {
    const [componentsArray, setComponentsArray] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [actualPrice, setActualPrice] = useState(0);
    const { updatePrice } = useAppContext();

    const handleOnCloseModal = () => setIsModalVisible(false);
    const handleOnOpenModal = () => setIsModalVisible(true);
    const handleOnSubmit = (e, tempPrice) => {
        !isNaN(tempPrice) && setActualPrice(parseFloat(tempPrice));
        handleOnCloseModal();
    }

    const DynamicButton = () => {
        return(
            <Button
                onClick={handleOnOpenModal}
            >
                Modificar
            </Button>
        );
    }

    const ServicesPriceModal = ({ value }) => {

        const [tempPrice, setTempPrice] = useState(0);

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
                                className='inputModal'
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

    const createCustomComponent = (el, i) => {
        switch (el) {
            case 'ServicesStatusDropdown':
                return createElement(CustomDropdownContainer, { key: i }, el);
                break;
            case 'Button':
                return createElement(DynamicButton, { key: i }, el);
                break;
            default:
                return null;
        }
    }

    useEffect(() => {
        extra.forEach((el, i) => {
            const TempComp = createCustomComponent(el, i);
            setComponentsArray([...componentsArray, TempComp]);
        });
    }, []);

    useEffect(() => {
        updatePrice(actualPrice);
    }, [actualPrice]);

    return (
        <Card className='shadow mb-5 bg-white rounded'>
            <ServicesPriceModal value={actualPrice}/>
            <Card.Body>
                <div className='servicesCardDiv'>
                    <DynamicIconContainer icon={icon} />
                    <Card.Text className='my-0'>
                        {title}: { type === 'modal' && actualPrice}
                    </Card.Text>
                    {
                        componentsArray.map((el, i) => 
                        {
                            return(el)
                        })
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default ServicesCard;
