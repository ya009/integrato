const { default: Link } = require("next/link");
const { Container, Button, Card } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'

function Botao(){
    return(
        <Container className= {styles['container']}>

            <div className= {styles['divBotao']} >
                <h1>Pesquise por Integrato em:</h1>
                <div className= {styles['box3']}>
                    <div className= {styles['box1']}>
                    <Button className= {styles['botao1']} size='lg'>App Store</Button>
                    </div>
                    <div className= {styles['box2']}>
                    <Button className= {styles['botao1']} size='lg'>PlayStore</Button>
                    </div>

                </div>
                
            </div>
  
        </Container>
    )
}
export default Botao;