import './App.css';
import './CustomApp.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContextProvider } from './contexts/appContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomNavbarContainer, ServicesScreenContainer, InformationScreenContainer, SidebarContainer, LogsScreenContainer } from './components';

function App() {
  return (

    <AppContextProvider>
      <div className="App">
        <header>
          <CustomNavbarContainer />
        </header>
        <main>
          <Container fluid style={{ height: '100vh' }}>
            <BrowserRouter>
              <Row style={{ height: '100%' }}>
                <Col className='col-md-2 p-0'>
                  <SidebarContainer />
                </Col>
                <Col>
                  <Routes>
                    <Route path='/' element={<ServicesScreenContainer />} />
                    <Route path="/information" element={<InformationScreenContainer />} />
                    <Route path="/logs" element={<LogsScreenContainer />} />
                    <Route path="*" element={<ServicesScreenContainer />} />
                  </Routes>
                </Col>
              </Row>
            </BrowserRouter>
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
