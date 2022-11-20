// Imports
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { ServicesCardContainer } from '../';
import { useAppContext } from '../../contexts/appContext';

import './styles.css';

// Component start
const ServicesScreen = ({data}) => {

    return (
        <Container className='mt-2' >

            <Row>
                <Col className='text-left'>
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
