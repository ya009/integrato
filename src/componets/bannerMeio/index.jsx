const { Image, Container } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'

function BannerMeio(){
    return(
            <Image src="/homeMeio.png" className= {styles['imagem']} ></Image>

    )
}
export default BannerMeio;