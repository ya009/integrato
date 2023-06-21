import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';

function Navegacao() {

  const router = useRouter();

  function Home(){
      router.push('/home')
  }
  function Instagram(){
    window.open('https://www.instagram.com/integratofibra/')
  }
  function Facebook(){
    window.open('https://www.facebook.com/integratointernet')
  }




  
  return (
    <Nav className="justify-content-center" id='navega' >
      <Nav.Item href = '/palmeiropolis/home' >
      <Image src='/Integrato_01.png'  width={250} height={60} onClick={Home}></Image>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/palmeiropolis/institucional" eventKey="link-1" style={{ color: 'black'}}> Institucional</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/palmeiropolis/plano' eventKey="link-2" style={{ color: 'black'}}> Planos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/palmeiropolis/contato' eventKey="link-3" style={{ color: 'black'}}> Contato</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" href='/RH' style={{ color: 'black'}}> Trabalhe Conosco</Nav.Link>
      </Nav.Item>
      <Nav.Item href = '/palmeiropolis/home' >
        <Image src='/instagram.png' onClick={Instagram} width={30} height={30} style={{ marginRight: '20px' }}></Image>
      </Nav.Item>
      <Nav.Item href = '/palmeiropolis/home'>
        <Image src='/facebook.png' onClick={Facebook} width={30} height={30}></Image>
      </Nav.Item>
    </Nav>
  );
}

export default Navegacao;