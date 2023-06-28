import styles from '@/styles/Online.module.css'
import { Button, Container, Stack } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';
import { useState } from 'react';

function FormCadastro(){

    const [nome1, setNome1] = useState('')
    const [email1, setEmail1] = useState('')
    const [telefoneRes1, setTelefoneRes1] = useState('')
    const [telefoneCom1, setTelefoneCom1] = useState('')
    const [celular1, setCelular1] = useState('')
    const [rg1, setRg1] = useState('')
    const [cpf1, setCpf1] = useState('')
    const [dataNasc1, setDataNasc1] = useState('')
    const [cidade1, setCidade1] = useState('')
    const [cep1, setCep1] = useState('')
    const [rua1, setRua1] = useState('')
    const [numero1, setNumero1] = useState('')
    const [bairro1, setBairro1] = useState('')
    const [complemento1, setComplemento1] = useState('')
    const [distrito1, setDistrito1] = useState('')

    const enviar = async (e) => {
        console.log(nome1)
        const addOnline = {
            nome: nome1,
            email: email1,
            telefoneRes: telefoneRes1,
            telefoneCom: telefoneCom1,
            celular: celular1,
            rg: rg1,
            cpf: cpf1,
            dataNasc: dataNasc1,
            cidade: cidade1,
            cep: cep1,
            rua: rua1,
            numero: numero1,
            bairro: bairro1,
            complemento: complemento1,
            distrito: distrito1,
        }
        const res = await fetch ('/api/online', {
            method: 'POST',
            body: JSON.stringify (addOnline),
            headers:{'Content-Type': 'application/json'}
        })
        }
    const router = useRouter();
    function handleClick(){
        router.push('/jau/pagamento')
    }
    function click(){
        enviar()
        handleClick()
    }
    return(
        <Container className= {styles['container']}>
            <Stack direction="horizontal" gap={6}>
                <strong className= {styles['numero']}>1</strong>
                <strong className= {styles['nome']}>Cadastro</strong>
                <div className= {styles['numero']}>2</div> 
                <div className= {styles['nome']}>Cobrança</div>
                <div className= {styles['numero']}>3</div>
                <div className= {styles['nome']}>Confirmação</div>
            </Stack>
            <div className= {styles['box']}>
                <p className= {styles['dados']}>DADOS PESSOAIS</p>
                <div className= {styles['traco']}></div>
            </div>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>NOME COMPLETO</Form.Label>
                        <Form.Control type='name' onChange={(e) => setNome1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type='email' onChange={(e) => setEmail1(e.target.value)} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>TELEFONE RESIDENCIAL</Form.Label>
                        <Form.Control type='tel'onChange={(e) => setTelefoneRes1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>TELEFONE COMERCIAL</Form.Label>
                        <Form.Control type='tel' onChange={(e) => setTelefoneCom1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>CELULAR</Form.Label>
                        <Form.Control type='tel' onChange={(e) => setCelular1(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>RG</Form.Label>
                        <Form.Control onChange={(e) => setRg1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="000.000.000-00" onChange={(e) => setCpf1(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Label>DATA DE NASCIMENTO</Form.Label>
                        <Form.Control type='date' onChange={(e) => setDataNasc1(e.target.value)}/>
                    </Col>
                </Row>
            </Form> 
            <div className= {styles['box']}>
                <p className= {styles['dados']}>Endereço</p>
                <div className= {styles['traco']}></div>
            </div>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>CIDADE/UF</Form.Label>
                        <Form.Select onChange={(e) => setCidade1(e.target.value)}>
                                <option> Cidade / UF</option>
                                <option>Minaçu(GO) </option>
                                <option>Campinaçu(GO) </option>
                                <option>Palmeirópolis(TO) </option>
                                <option>Jáu(TO) </option>
                            </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control  onChange={(e) => setCep1(e.target.value)}/>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>RUA</Form.Label>
                        <Form.Control type='text' onChange={(e) => setRua1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>NÚMERO</Form.Label>
                        <Form.Control onChange={(e) => setNumero1(e.target.value)}/>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>BAIRRO</Form.Label>
                        <Form.Control onChange={(e) => setBairro1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>COMPLEMENTO</Form.Label>
                        <Form.Control type="text" onChange={(e) => setComplemento1(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>DISTRITO</Form.Label>
                        <Form.Control type='text' onChange={(e) => setDistrito1(e.target.value)}/>
                    </Col>
                </Row>
            </Form>
            <div className="d-flex justify-content-center">
                <Button className= {styles['botao']} variant='secondary' size='lg' onClick={click}> Continuar</Button>
            </div>
        </Container>
    )
}
export default FormCadastro;