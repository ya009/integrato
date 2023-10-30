import { Card, Image, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'

function Navegacao() {

  const router = useRouter();
  function Home(){
      router.push('/minacu/home')
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

      <div className= {styles['divNavegar']}>
        <Nav className="justify-content-center" id='navega' >
        <Nav.Item href = '/minacu/home' >
          <Image src='/Integrato_01.png'  width={250} height={60} onClick={Home}></Image>
        </Nav.Item>
        <Nav.Item className= {styles['navText']}>
          <Nav.Link  href="/minacu/institucional" eventKey="link-1"  > Institucional</Nav.Link>
        </Nav.Item>
        <Nav.Item className= {styles['navText']}>
        <NavDropdown title = "Planos" eventKey="link-2" >
          <NavDropdown.Item href='/minacu/planoFibra' >Fibra Óptica</NavDropdown.Item>
          <NavDropdown.Item href='/minacu/planoTelecom' >Telecom</NavDropdown.Item>
        </NavDropdown>
        </Nav.Item>
        <Nav.Item className= {styles['navText']}>
          <Nav.Link href='/minacu/contato' eventKey="link-3" style={{ color: 'black '}}> Contato</Nav.Link>
        </Nav.Item>
        <Nav.Item className= {styles['navText']}>
          <Nav.Link eventKey="link-4" href='/minacu/RH'  style={{ color: 'black '}}> Trabalhe Conosco</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Image src='/instagram.png' onClick={Instagram} width={40} height={40} style={{ marginRight: '20px' }}></Image>
        </Nav.Item>
        <Nav.Item >
          <Image src='/facebook.png' onClick={Facebook} width={40} height={40}></Image>
        </Nav.Item>
        <Nav.Item href = '/home' style={{ marginLeft: '20px' }}>
          <Image src='/whatsapp.png' onClick={Whatsapp} width={41} height={41} ></Image>
        </Nav.Item>
      </Nav>
      </div>
    
      
  );
}
export default Navegacao;