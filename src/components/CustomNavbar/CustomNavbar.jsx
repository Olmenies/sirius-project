// Imports
import { Navbar, Container } from 'react-bootstrap';

// Component start
const CustomNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='justify-content-center'>
                    <Navbar.Brand href="#home"> Cumbia Peposa </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

// Exports
export default CustomNavbar