import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import notiocnImg from '../../img/notiocn.png'; // Импортируем изображение оповещений

function BasicExample() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="mx-auto d-flex">
            <FormControl type="text" placeholder="Поиск" className="mr-2" />
            <Button variant="outline-success">Поиск</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#notifications">
              <img src={notiocnImg} alt="Оповещения" height="20" /> {/* Иконка оповещений */}
            </Nav.Link>
            <Nav.Link href="#profile">Профиль</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
