import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContextProvider } from '../src/contexts/appContext';
import { SidebarContainer, NavbarContainer, DashboardContainer } from './components';

function App() {
  return (

    <AppContextProvider>
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
    </AppContextProvider>

  );
}
//<AppContextProvider></AppContextProvider>

export default App;
