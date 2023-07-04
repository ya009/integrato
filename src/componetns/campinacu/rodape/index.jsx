const { Container, CardGroup, Card } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

function Rodape(){
    return(
        <footer className= {styles['rodape']} >
            <Container>
                <CardGroup>
                    <Card className= {styles['card']}>
                        <p>Menu</p>
                        <Nav  className="flex-column">
                            <Link href="/campinacu/home" style={{ color: 'white', marginBottom: "2%"}}>Home</Link>
                            <Link href='/campinacu/institucional'style={{ color: 'white', marginBottom: "2%"}}>Institucional</Link>
                            <Link href='/campinacu/plano'style={{ color: 'white', marginBottom: "2%"}}>Planos</Link>
                            <Link href='/campinacu/contato'style={{ color: 'white', marginBottom: "2%"}}>Contato</Link>
                            <Link href='/campinacu/RH'style={{ color: 'white', marginBottom: "2%"}}>Trabalhe Conosco</Link>
                        </Nav> 
                    </Card>
                    <Card className= {styles['card']}>
                        <p>Contato</p>
                        <Nav  className="flex-column">
                            <Link href="/campinacu/contato" style={{ color: 'white', marginBottom: "2%"}}>Ver nossas lojas</Link>
                            <Link href='/campinacu/contato' style={{ color: 'white', marginBottom: "2%"}}>(62)3379-2839</Link>
                        </Nav>
                    </Card>
                </CardGroup>
            </Container>
            <div className= {styles['traco']}></div>
            <Container>
                <div>
                    <p>@2023 INTEGRATO LTDA. TODOS OS DIREITORS RESERVADOS</p>
                    <span style={{ color: '#7E1BCA'}}>CNPJ: 17.104.489/0001-44 - INTEGRATO TELECOMUNICACOES LTDA</span>
                </div>
            </Container>
        </footer>
    )
}
export default Rodape;