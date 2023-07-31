const { Image, Container, Button, Card } = require("react-bootstrap");
import styles from '@/styles/Banner.module.css'
import Link from 'next/link';

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
                <Link href= '/minacu/planoFibra'>
                    <Button className= {styles['plano']}>Conheça nossos planos</Button>
                </Link>
             
            </div>      

           
        </Container>
    )
}
export default BannerMeio;