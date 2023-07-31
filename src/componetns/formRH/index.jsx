const { Container, CardGroup, Card, Form, Button, Image } = require("react-bootstrap");
import styles from '@/styles/Ligar.module.css'
import Swal from 'sweetalert2'
import { useState } from 'react';

function FormRH(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [curriculo, setCurriculo] = useState('')
    const [mensagem, setMensagem] = useState('')

    const enviar = async (e) => {
        e.preventDefault()
        console.log(nome)

        const res = await fetch ('/api/rh', {
            method: 'POST',
            body: JSON.stringify ({nome, email, telefone, cidade, curriculo, mensagem}),
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
                        <Image src='/colaborador.png'></Image>
                        <h1 className= {styles['texto']}>Venha fazer parte da equipe que mais cresce na cidade</h1>
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
                        <Form.Label>Telefone </Form.Label>
                            <Form.Control type="phone" placeholder="Telefone"  onChange={(e) => setTelefone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Cidade/UF</Form.Label>
                            <Form.Select  onChange={(e) => setCidade(e.target.value)} >
                                <option> Cidade / UF</option>
                                <option>Minaçu(GO) </option>
                                <option>Campinaçu(GO) </option>
                                <option>Palmeirópolis(TO) </option>
                                <option>Jáu(TO) </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                        <Form.Label>Currículo</Form.Label>
                            <Form.Control type="file" placeholder="Anexe aqui o seu curriculum"  onChange={(e) => setCurriculo(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                        <Form.Label>Poque você quer fazer parte da equipe Integrato?</Form.Label>

                            <Form.Control type="text" placeholder="Por que você quer fazer parte da equipe Integrato?"  onChange={(e) => setMensagem(e.target.value)}/>
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

export default FormRH;