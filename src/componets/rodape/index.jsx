const { Container } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'



function Rodape(){
    return(
        <footer className= {styles['rodape']} >
             <div className="container">
                <p>Todos os direitos reservados © 2023</p>
            </div>
        </footer>
    )
}
export default Rodape;