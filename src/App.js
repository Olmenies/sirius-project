import logo from './logo.svg';
import './App.css';
import { SidebarContainer, NavbarContainer, DashboardContainer } from './components';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <NavbarContainer />
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col md={3} className='px-0' style={{ backgroundColor: '#f8f9fa' }}><SidebarContainer /></Col>
            <Col md={9}><DashboardContainer /></Col>
          </Row>
        </Container>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
