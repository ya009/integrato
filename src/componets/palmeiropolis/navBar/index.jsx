import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '@/styles/Home.module.css'
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Link from 'next/link';


function NavBar() {

    function link(){
        window.open("https://centralcliente.integrato.net.br/central_assinante_web/login")
    
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto text-center">
                <Form.Select className= {styles['select']}>
                        <option value={'palmeiropolis'}>Palmeirópolis(TO)</option>
                        <option value={'minacu'}>Minaçu(GO)</option>
                        <option value={'campinacu'}>Campinaçu(GO)</option>
                        <option value={'jau'}>Jaú(TO)</option>
                    </Form.Select>
                </Nav>
                <Nav className='justify-content-end'>
                        <Image src='/whatsapp.png'className= {styles['img']}></Image>
                    <Navbar.Brand href="https://wa.me/556233792938">(62) 3379-2938</Navbar.Brand>
                    <Button onClick={link} className= {styles['botao']}>Área do Cliente</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;