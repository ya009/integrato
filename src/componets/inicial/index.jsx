import { Card, CardGroup, Container} from "react-bootstrap";
import styles from '@/styles/Inicio.module.css'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import { useState } from "react";



function Inicio(){

    const router = useRouter();
    let pagina
    function link(){

        let cidade = document.getElementById('cidade')
        pagina = cidade.value 
        console.log(pagina)

        switch (pagina){
            case '':
                Swal.fire('Escolha uma cidade por favor');
                break;
            case 'minacu':
                router.push('/minacu/home');
                break;
            case 'campinacu':
                router.push('/campinacu/home');
                break;
            case 'palmeiropolis':
                router.push('/home');
                break;
            case 'jau':
                    router.push('/home');
                    break;
        }
    }

    return(
        <div className= {styles['body']}>
            <Container className= {styles['container']}>

                <div className= {styles['box']}>
                    <div>
                        <h1 className= {styles['titulo']}>Escolha sua cidade</h1>
                    </div>
                    <div>
                        <h2 className= {styles['sub']}>Precisamos saber sua cidade para verificar a disponibilidade de sinal na região.</h2>
                    </div>
                    
                    
                </div>
                <div className= {styles['box2']}>
                    <div className= {styles['s']}>
                    <Form.Select className= {styles['select']} id="cidade">
                        <option value={''}></option>
                        <option value={'minacu'}>Minaçu(GO)</option>
                        <option value={'campinacu'}>Campinaçu(GO)</option>
                        <option value={'palmeiropolis'}>Palmeirópolis(TO)</option>
                        <option value={'jau'}>Jaú(TO)</option>
                    </Form.Select>
                    </div>
                    
                    <div className= {styles['botao']}>
                    <Button onClick={link} className= {styles['b2']} >Verificar</Button>
                    </div>
                    
                </div>

                

            </Container>
            
        </div>

    )
}

export default Inicio;