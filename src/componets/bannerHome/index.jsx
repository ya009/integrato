const { Image, Container } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'

function BannerHome(){
    return(
        <Container className='justify-content-center'>
            <Image src="/bannerHome.png" className= {styles['imagem']} ></Image>
        </Container>

    )
}
export default BannerHome;