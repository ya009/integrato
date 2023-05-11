const { Container, Card, CardGroup, Image } = require("react-bootstrap");
import styles from '@/styles/Institucional.module.css'


function Banner(){
    return(
        <Image src="/bannerNumero.png" className= {styles['imagem']} ></Image>
    )
}
export default Banner;