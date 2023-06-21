const { Image, Container, Button } = require("react-bootstrap");
import styles from '@/styles/Banner.module.css'

function BannerMeio(){
    return(
        <Container className= {styles['imagemMeio']}>
            <div className= {styles['div']}>
            <Image src="/homeMeio.png" className= {styles['imagem']} ></Image>
            </div>
            <div className= {styles['div2']}>
             <h1>
                Procurando o <strong>melhor plano de internet</strong>, com velocidade e estabilidade de conexão?
             </h1>
             <Button className= {styles['plano']}>Conheça nossos planos</Button>
            </div>
            
        </Container>
            

    )
}
export default BannerMeio;