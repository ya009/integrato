import styles from '@/styles/Contrate.module.css'
import { Card, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useRouter } from 'next/router';


function IconCompra(){

    const router = useRouter();

    function handleClick(){
        router.push('/ligar')
    }
    function handleClick2(){
        router.push('/assinar')
    }
    

    return(
        <Container className= {styles['container']}>
            <CardGroup className= {styles['cardG']}>
                <Card className= {styles['card']}>
                    <div >
                        <div>
                            <Image src='/iconTele.png'width={200} height={200}></Image>
                            <div>
                                <h1 className= {styles['titulo']}>Gostou dos planos?</h1>
                                <h3 className= {styles['sub']}>A gente te liga e acerta os detalhes para você ter a melhor internet.</h3>
                            </div>
                            <Button className= {styles['botao']} variant='secondary' onClick={handleClick}>Integrato te liga</Button>

                        </div>
                    </div>
                </Card>
                <Card className= {styles['card']}>
                    <div >
                        <div>
                            <Image src='/iconCompra.png' width={200} height={200}></Image>
                            <div>
                                <h1 className= {styles['titulo']}>Contrate online, agora!</h1>
                                <h3 className= {styles['sub']}>O jeito mais fácil e rápido de ter a melhor internet com você.</h3>
                            </div>
                            <Button className= {styles['botao']} variant='secondary' onClick={handleClick2}>Contratar Online</Button>

                        </div>
                    </div>
                </Card>
            </CardGroup>
        </Container>
    )

}

export default IconCompra;