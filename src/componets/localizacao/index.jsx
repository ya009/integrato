const { Button } = require("react-bootstrap");
import styles from '@/styles/Contato.module.css'


function Localizacao(){

    function link(){
        window.open("https://www.google.com/maps/place/Integrato+Fibra/@-13.5339847,-48.2272769,16.42z/data=!4m6!3m5!1s0x93468522e67cb409:0x56fae0da2a3dffb2!8m2!3d-13.5341954!4d-48.2222509!16s%2Fg%2F11bbrkl2d8")
    }
    function link1(){
        window.open("https://www.google.com/maps/place/Integrato+Fibra/@-13.5339847,-48.2272769,16.42z/data=!4m6!3m5!1s0x93468522e67cb409:0x56fae0da2a3dffb2!8m2!3d-13.5341954!4d-48.2222509!16s%2Fg%2F11bbrkl2d8")
    }

    return(
        <div className= {styles['container']}>
            <h1>Confira a localização </h1>
            <h1><strong>de cada uma das lojas Integrato</strong></h1>
            <div className= {styles['loc']}>
                <div >
                    <h3>Minaçu - GO</h3>
                    <p>Av. Maranhão, 517 - Centro, Minaçu - GO, 76450-000</p>
                    <Button className= {styles['botao']} onClick={link}>Ver no mapa</Button> 
                </div>
                <div>
                    <h3>Campinaçu - GO</h3>
                    <p>Av. Francisco Irene da Silva, Centro CEP:76440-000</p>
                    <Button className= {styles['botao']}>Ver no mapa</Button> 
                </div>
                <div>
                    <h3>Palmeirópolis - TO</h3>
                    <p>Av. Castelo Branco, 718,Centro CEP: 77.365-000</p>
                    <Button className= {styles['botao']}>Ver no mapa</Button> 
                </div>
                <div>
                    <h3>Jaú - TO</h3>
                    <p>Avenida C, N 646-CENTRO CEP: 77450-000</p>
                    <Button className= {styles['botao']}>Ver no mapa</Button> 
                </div>

            </div>
           

        </div>
           

    )
}

export default Localizacao;