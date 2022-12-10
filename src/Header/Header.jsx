import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand style={{ marginRight: '250px' }} href='#home'>
          My Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav style={{ gap: '50px' }} className='me-auto'>
            <Nav.Link href='#home'>Главная</Nav.Link>
            <Nav.Link href='#aboutUs'>О нас</Nav.Link>
            <NavDropdown title='Продукты' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#branches'>Филиалы</NavDropdown.Item>
              <NavDropdown.Item href='#management'>Руководство</NavDropdown.Item>
              <NavDropdown.Item href='contact'>Связаться</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#price'>Цены</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
