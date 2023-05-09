const { default: Link } = require("next/link");
const { Container, Button } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'

function Botao(){
    return(
        <Container className= {styles['container']}>
            <div>
                <h1>Pesquise por Integrato em:</h1>
                <div className= {styles['box1']}>
                <Button className= {styles['botao1']}>App Store</Button>

                </div>
                <div className= {styles['box2']}>
                <Button className= {styles['botao1']}>PlayStore</Button>
                </div>
                
                
            </div>
        </Container>
    )
}
export default Botao;