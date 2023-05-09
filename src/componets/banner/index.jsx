const { Container, Card, CardGroup } = require("react-bootstrap");
import styles from '@/styles/Institucional.module.css'

function Banner(){
    return(
        <CardGroup className= {styles['container']}>
            <Card className= {styles['card']}>
                <div>
                    <h2 className= {styles['titulo']}>Confira alguns números que mostram a nossa atuação:</h2>

                </div>
            </Card>
            <Card className= {styles['card']}>
                <div>
                    <h2 className= {styles['numero']}>6.800</h2>
                    <h3 className= {styles['uni']}>MIL</h3>
                    <h4 className= {styles['complemento']}>Clientes de Internet</h4>
                </div>
            </Card>
            <Card className= {styles['card']}>
                <div>
                    <h2 className= {styles['numero']}>500</h2>
                    <h3 className= {styles['uni']}>KM</h3>
                    <h4 className= {styles['complemento']}>de Fibra Contruída</h4>
                </div>
            </Card >
            <Card className= {styles['card']}>
                <div>
                    <h2 className= {styles['numero']}>6</h2>
                    <h4 className= {styles['complemento']}>Cidades Atendidas</h4>
                </div>
            </Card>
        </CardGroup>
    )
}
export default Banner;