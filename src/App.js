import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContextProvider } from '../src/contexts/appContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomNavbarContainer, ServicesScreenContainer, InformationScreenContainer } from './components';

function App() {
  return (

    <AppContextProvider>
      <div className="App">
        <header>
          <CustomNavbarContainer />
        </header>
        <main>
          <Container fluid>
            <Row>
              <Col>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<ServicesScreenContainer />} />
                    <Route path="/information" element={<InformationScreenContainer />} />
                    <Route path="*" element={<ServicesScreenContainer />} />
                  </Routes>
                </BrowserRouter>
              </Col>
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
