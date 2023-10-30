const { Container, CardGroup, Card, Form, Button, Image } = require("react-bootstrap");
import styles from '@/styles/Ligar.module.css'
import Swal from 'sweetalert2'
import { useState } from 'react';

function FormContato(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [mensagem, setMensagem] = useState('')


    const enviar = async (e) => {
        e.preventDefault()

        const res = await fetch ('/api/contato', {
            method: 'POST',
            body: JSON.stringify ({nome, email, telefone, cidade, mensagem}),
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
                    <div className= {styles['imgDiv']}>
                        <Image src='/contato.png' className= {styles['img']}></Image>
                        <h1 className= {styles['texto']}>Este é seu canal de comunicação com a nossa equipe.</h1>
                    </div>

                </Card>
                <Card className= {styles['card']}>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="name" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)}/>  
                        </Form.Group>
                        <Form.Group className="mb-3" >
                        <Form.Label>Telefone</Form.Label>
                            <Form.Control type="phone" placeholder="Telefone"  onChange={(e) => setTelefone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Cidade/UF</Form.Label>
                            <Form.Select  onChange={(e) => setCidade(e.target.value)}>
                                <option> Cidade / UF</option>
                                <option>Minaçu(GO) </option>
                                <option>Campinaçu(GO) </option>
                                <option>Palmeirópolis(TO) </option>
                                <option>Jáu(TO) </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                        <Form.Label>Mensagem</Form.Label>
                            <Form.Control as= 'textarea' placeholder="(Escreva sua mensagem aqui)" rows={6}  onChange={(e) => setMensagem(e.target.value)}/>
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

export default FormContato;