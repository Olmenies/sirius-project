// Imports
import { createElement, useState, useEffect } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { DynamicIconContainer, CustomDropdownContainer } from '../';
import { useAppContext } from '../../contexts/appContext';


// Component start
const ServicesCard = ({ icon, title, variable, extra }) => {
    const [componentsArray, setComponentsArray] = useState([]);
    const [actualStatus, setActualStatus] = useState(false)
    const { updateStatus, updatePrice } = useAppContext();


    const ServicesStatusDropdown = () => {
        const setSelectedValue = (e = true) => {
            setActualStatus(e);
            console.log(e);
        }

        useEffect(() => {
            updateStatus(actualStatus);
            //updatePrice(actualPrice);
        }, [/*actualPrice, */actualStatus]);


        return (
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '7rem' }}>
                    asd
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        as='button'
                        value={true}
                        onClick={e => setSelectedValue(true)}
                    >
                        Activo</Dropdown.Item>
                    <Dropdown.Item
                        value={false}
                        onClick={e => setSelectedValue(false)}
                    >
                        Inactivo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    // Move to ServicesCardContainer
    useEffect(() => {
        extra.forEach((el, i) => {
            console.log(el);
            const TempComp = createElement(CustomDropdownContainer, { key: i }, el);
            setComponentsArray([...componentsArray, TempComp]);
        });
    }, []);

    return (
        <Card className='shadow p-3 mb-5 bg-white rounded'>
            <Card.Body>
                <div className='customCardDiv'>
                    <DynamicIconContainer icon={icon} />
                    <Card.Text className='my-0'>
                        {title}: {variable}
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
