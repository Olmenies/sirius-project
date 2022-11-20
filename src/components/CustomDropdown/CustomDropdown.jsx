// Imports
import { useEffect, useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { useAppContext } from '../../contexts/appContext';

// Components
const CustomDropdown = () => {
    const [actualStatus, setActualStatus] = useState(false)
    const { updateStatus } = useAppContext();

    const ServicesStatusDropdown = () => {
        const setSelectedValue = (e = true) => {
            setActualStatus(e);
            console.log(e);
        }

        useEffect(() => {
            updateStatus(actualStatus);
        }, [actualStatus]);

        return (
            <Dropdown >
                <Dropdown.Toggle variant={actualStatus === true ? 'success' : 'danger'} id="dropdown-basic" style={{ width: '7rem' }}>
                {actualStatus ? 'Activo' : 'Inactivo'}
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

    return (
        <ServicesStatusDropdown />
    );
}

// Exports
export default CustomDropdown;