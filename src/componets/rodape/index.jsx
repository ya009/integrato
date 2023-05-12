const { Container, CardGroup, Card } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'
import Nav from 'react-bootstrap/Nav';


function Rodape(){
    return(
        <footer className= {styles['rodape']} >

            <Container>
                <CardGroup>
                    <Card className= {styles['card']}>
                        <p>Menu</p>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home" style={{ color: 'white'}}>Home</Nav.Link>
                            <Nav.Link href='/institucional'style={{ color: 'white'}}>Institucional</Nav.Link>
                            <Nav.Link href='/plano'style={{ color: 'white'}}>Planos</Nav.Link>
                            <Nav.Link href='/contato'style={{ color: 'white'}}>Contato</Nav.Link>
                            <Nav.Link href='/RH'style={{ color: 'white'}}>Trabalhe Conosco</Nav.Link>
                        </Nav> 
                    </Card>
                    <Card className= {styles['card']}>
                        <p>Contato</p>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/contato" style={{ color: 'white'}}>Ver nossas lojas</Nav.Link>
                            <Nav.Link href='/contato' style={{ color: 'white'}}>(62)3379-2839</Nav.Link>
                        </Nav>
                    </Card>
                </CardGroup>
            </Container>
            <div className= {styles['traco']}></div>
            <Container>
                <div>
                    <p>@2023 INTEGRATO LTDA. TODOS OS DIREITORS RESERVADOS</p>
                    <span style={{ color: 'purple'}}>CNPJ: 17.104.489/0001-44 - INTEGRATO TELECOMUNICACOES LTDA</span>
                </div>
            </Container>
        </footer>
    )
}
export default Rodape;