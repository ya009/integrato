import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {

    function link(){
        window.open("https://centralcliente.integrato.net.br/central_assinante_web/login")
    
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto text-center">
                    <NavDropdown title="Cidades" id="dropdown">
                        <NavDropdown.Item href="#action/3.1">Minaçu(GO)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Campinaçu(GO)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Palmeirópolis(TO)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Jaú(TO)</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className='text-center'>
                    <Navbar.Brand href="#home">(62) 3379-2839</Navbar.Brand>
                    <Button onClick={link} >Área do Cliente</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;