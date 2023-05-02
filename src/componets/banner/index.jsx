const { Container } = require("react-bootstrap");
import styles from '@/styles/Institucional.module.css'

function Banner(){
    return(
        <div className= {styles['banner']}>
            <div>
                <h2 className= {styles['titulo']}>
                Confira alguns números que mostram a nossa atuação:
                </h2>
                <p className= {styles['numero']}>6.800</p>
                <p className= {styles['uni']}>MIL</p>

                <p className= {styles['numero']}>500</p>
                <p className= {styles['uni']}>KM</p>

                <p className= {styles['numero']}>6</p>
                
                <p className= {styles['complemento']}>Clientes de Internet</p>

                <p className= {styles['complemento']}>de Fibra Contruída</p>
         
                <p className= {styles['complemento']}>Cidades Atendidas</p>
            </div>

        </div>
    )
}
export default Banner;