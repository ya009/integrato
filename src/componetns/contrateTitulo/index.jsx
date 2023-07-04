import styles from '@/styles/Contrate.module.css'
import { Container } from 'react-bootstrap';

function Contrate(){
    return(
        <Container className= {styles['container']}>
            <h1 className= {styles['titulo']}>Queremos que você seja nosso cliente</h1>
            <h3 className= {styles['sub']}>Escolha abaixo a forma de compra ideal para você</h3>
        </Container>
    )
}
export default Contrate;