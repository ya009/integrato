const { Image, Container } = require("react-bootstrap");
import styles from '@/styles/Home.module.css'

function Aplicativo(){
    return(
        <Image src="/banner.png" className= {styles['imagem']} ></Image>
    )
}
export default Aplicativo;