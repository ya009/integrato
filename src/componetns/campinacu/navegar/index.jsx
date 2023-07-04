import { Image, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';


function Navegacao() {

  const router = useRouter();
  function Home(){
      router.push('/campinacu/home')
  }
  function Instagram(){
    window.open('https://www.instagram.com/integratofibra/')
  }
  function Facebook(){
    window.open('https://www.facebook.com/integratointernet')
  }
  function Whatsapp(){
    window.open('https://wa.me/556233792938')
  }

  return (
      <Nav className="justify-content-center" id='navega' >
      <Nav.Item href = '/campinacu/home' >
        <Image src='/Integrato_01.png'  width={250} height={60} onClick={Home}></Image>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/campinacu/institucional" eventKey="link-1"  style={{ color: 'black '}}> Institucional</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <NavDropdown title = "Planos" eventKey="link-2" color='#0000' >
        <NavDropdown.Item href='/campinacu/planoFibra' >Fibra Óptica</NavDropdown.Item>
        <NavDropdown.Item href='/campinacu/planoTelecom' >Telecom</NavDropdown.Item>
      </NavDropdown>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/campinacu/contato' eventKey="link-3" style={{ color: 'black '}}> Contato</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" href='/campinacu/RH' style={{ color: 'black '}}> Trabalhe Conosco</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Image src='/instagram.png' onClick={Instagram} width={30} height={30} style={{ marginRight: '20px' }}></Image>
      </Nav.Item>
      <Nav.Item >
        <Image src='/facebook.png' onClick={Facebook} width={30} height={30}></Image>
      </Nav.Item>
      <Nav.Item href = '/home' style={{ marginLeft: '20px' }}>
        <Image src='/whatsapp.png' onClick={Whatsapp} width={32} height={32} ></Image>
      </Nav.Item>
    </Nav>
  );
}
export default Navegacao;