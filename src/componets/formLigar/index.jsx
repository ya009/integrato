const { Container, CardGroup, Card, Form, Button } = require("react-bootstrap");
import styles from '@/styles/Ligar.module.css'
import { useState } from 'react';
import Swal from 'sweetalert2'

function FormLiga(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')

    const enviar = async (e) => {
        e.preventDefault()
        console.log(nome)

        const res = await fetch ('/api/ligar', {
            method: 'POST',
            body: JSON.stringify ({nome, email, telefone, cidade}),
            headers:{'Content-Type': 'application/json'}
        })
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
                        <h1 className= {styles['titulo']}>Nossos consultores estão prontos para te ligar.</h1>
                        <h1 className= {styles['texto']}>Preencha os dados ao lado e deixe que a gente fale com você.</h1>
                    </div>
                </Card>
                <Card className= {styles['card']}>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Control type="name" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)}/>  
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="phone" placeholder="Telefone"  onChange={(e) => setTelefone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select  onChange={(e) => setCidade(e.target.value)}>
                                <option> Cidade / UF</option>
                                <option value= 'Minaçu(GO)'>Minaçu(GO) </option>
                                <option value='Campinaçu(GO)'>Campinaçu(GO) </option>
                                <option value='Palmeiropolis(GO)'>Palmeirópolis(TO) </option>
                                <option value='Jau(GO)'>Jáu(TO) </option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <div className="d-flex justify-content-center">
                        <Button className= {styles['botao']} variant='secondary' onClick={enviar}> Enviar </Button>
                    </div>
                </Card>
            </CardGroup>
        </Container>
    )
}
export default FormLiga;