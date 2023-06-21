const { Image, Container, Button } = require("react-bootstrap");
import styles from '@/styles/Banner.module.css'

function Aplicativo(){

    return(
        <div className= {styles['box']}>
            <div >
                <Image src='/IRe.png' className= {styles['celular']}></Image>
                <div className= {styles['appBot']}>
                Pesquise por Integrato em:
                <div>
                  
                </div>
                <Button style={{ border: 'none', background: 'none', padding: 0 }}>
                <Image src='/gp.png'  width={130} height={50} className= {styles['botGP']}></Image>
                </Button>
                <Button style={{ border: 'none', background: 'none' }}>
                <Image src='/AS.png' width={130} height={50} className= {styles['botGP']}></Image>
                </Button>
              
              </div> 
            </div> 
        </div>
    )
}
export default Aplicativo;