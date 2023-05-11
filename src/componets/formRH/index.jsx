const { Container, CardGroup, Card, Form, Button, Image } = require("react-bootstrap");
import styles from '@/styles/Ligar.module.css'
import Swal from 'sweetalert2'

function FormRH(){

    const handleClick = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Dados enviados com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return(
        <Container className= {styles['container']} >
            <CardGroup className= {styles['cardG']}>
                <Card className= {styles['card']}>
                    <div>
                        <Image src='/colaborador.png'></Image>
                        <h1 className= {styles['texto']}>Venha fazer parte da equipe que mais cresce na cidade</h1>
                    </div>

                </Card>
                <Card className= {styles['card']}>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Control type="name" placeholder="Nome" /> 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" />  
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="phone" placeholder="Telefone" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select >
                                <option> Cidade / UF</option>
                                <option>Minaçu(GO) </option>
                                <option>Campinaçu(GO) </option>
                                <option>Palmeirópolis(TO) </option>
                                <option>Jáu(TO) </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Anexe aqui o seu curriculum" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Por que você quer fazer parte da equipe Integrato?" />
                        </Form.Group>
                    </Form>
                    <div className="d-flex justify-content-center">
                        <Button className= {styles['botao']} variant='secondary' onClick={handleClick}> Enviar </Button>

                    </div>
                   
                </Card>
            </CardGroup>

        </Container>
    )
}

export default FormRH;