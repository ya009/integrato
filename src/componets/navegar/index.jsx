import Nav from 'react-bootstrap/Nav';

function Navegacao() {
  
  return (
    <Nav className="justify-content-end" id='navega' >
      <Nav.Item>
        <Nav.Link href="/institucional" style={{ color: 'black'}}> Institucional</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/plano' style={{ color: 'black'}}> Planos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/home' style={{ color: 'black'}}> Contato</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" style={{ color: 'black'}}> Trabalhe Conosco</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navegacao;