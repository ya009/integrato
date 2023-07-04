import styles from '@/styles/Online.module.css'
import { Container } from 'react-bootstrap';

function TituloOnline(){

    return(
        <Container>
            <h1 className= {styles['titulo']}>Para seguir com a contratação, preencha o seu cadastro.</h1>
            <br/>
        </Container>   
    )
}
export default TituloOnline;