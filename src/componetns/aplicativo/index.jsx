const { Image, Button, Card } = require("react-bootstrap");
import styles from '@/styles/Banner.module.css'

function Aplicativo(){

    function appStore(){
        window.open('https://apps.apple.com/br/app/integrato-app/id1481493745')
    }
    function playStore(){
        window.open('https://play.google.com/store/apps/details?id=br.net.integrato.centralcliente')
    }

    return(
        <Card>
             <div className= {styles['box']}>
            <div className= {styles['divAp']}>
                <Image src='/IRe.png' className= {styles['celular']}></Image>
                <div className= {styles['appBot']}>
                Pesquise por Integrato em:
                <div className= {styles['bannerBot2']}>
                <Button className= {styles['bannerBot']} style={{ border: 'none', background: 'none'}} onClick={playStore}>
                <Image src='/gp.png'  width={110} height={50} className= {styles['botGP']}></Image>
                </Button>
                <Button  className= {styles['bannerBot']} style={{ border: 'none', background: 'none' }} onClick={appStore}>
                <Image src='/AS.png' width={110} height={50} className= {styles['botGP']}></Image>
                </Button>
                </div>
                
              
              </div> 
            </div> 
        </div>

        </Card>
       
    )
}
export default Aplicativo;