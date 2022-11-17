// Imports
import { Navbar, Container } from 'react-bootstrap';
import './styles.css';

// Component start
const CustomNavbar = () => {
    return (
        <div>
            <Navbar className='Navbar' expand="lg">
                <Container className='mx-0 px-2'>
                    <Navbar.Brand className='navbarBrand' href="/"> Fantastic 8 Peaje </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

// Exports
export default CustomNavbar