/*eslint-disable*/  //노란줄을 없애줌
import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Form } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import data from './components/data';
import Best from './pages/Best';
import Main from './pages/Main';
import About from './pages/About';
import History from './pages/History';
import Info from './pages/Info';


function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>삼진어묵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/best')}}>베스트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <a> */}
      {/* <Link to="/">home</Link>
      <Link to="/best" target='_blank'>best</Link> */}

      <Routes>
        <Route path='/' element={<Main/>}/>
        {/* nested router */}
        <Route path='/about' element={<About/>}>
          <Route path='history' element={<History />} />
          <Route path='info' element={<Info />} />
        </Route>
        <Route path='/best' element={<Best />}/>
      </Routes>
      
    </div>
  );
}

export default App;
