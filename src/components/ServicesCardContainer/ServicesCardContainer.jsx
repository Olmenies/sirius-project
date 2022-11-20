// Imports
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { ServicesCard } from '..';

// Component start
const ServicesCardContainer = ({el}) => {

    return (
        <ServicesCard
            icon={el.icon}
            title={el.title}
            variable={el.variable}
            extra={el.extra}
        />
    );
}

// Exports
export default ServicesCardContainer;