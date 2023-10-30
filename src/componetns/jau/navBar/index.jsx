import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '@/styles/Home.module.css'
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';


function NavBar() {
    const router = useRouter();

    let pagina

    function handleClick(){
        let cidade = document.getElementById('cidade')
        pagina = cidade.value 
        console.log(pagina)

        switch (pagina){
            case '':
                Swal.fire('Escolha uma cidade por favor');
                break;
            case 'minacu':
                router.push('/minacu/home');
                break;
            case 'campinacu':
                router.push('/campinacu/home');
                break;
            case 'palmeiropolis':
                router.push('/palmeiropolis/home');
                break;
            case 'jau':
                    router.push('/jau/home');
                    break;
        }
    }

    function link(){
        window.open("https://centralcliente.integrato.net.br/central_assinante_web/login")
    
    }
    return (
        <div className= {styles['navPrincipal']}>
         <Navbar bg="dark" variant="dark">
            <Container className= {styles['navPrincipalCont']}>
                <Nav className="justify-content-center">
                <Form.Select className= {styles['select']} id='cidade' onClick={handleClick}>
                        <option value={'campinacu'}>Jaú(GO)</option>
                        <option value={'campinacu'}>Campinaçu(GO)</option>
                        <option value={'minacu'}>Minaçu(GO)</option>
                        <option value={'palmeiropolis'}>Palmeirópolis(TO)</option>
                    </Form.Select>
                </Nav>
                <Nav >
                    <Navbar.Brand href="https://wa.me/556233792938" className= {styles['textNumero']}>(62)3379-2938</Navbar.Brand>
                    <Button onClick={link} className= {styles['botao']}>Área do Cliente</Button>
                </Nav>
            </Container>
        </Navbar>
      </div>    
    );
};

export default NavBar;