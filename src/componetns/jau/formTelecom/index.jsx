import styles from '@/styles/Online.module.css'
import { Button, Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Swal from 'sweetalert2';

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
    const [plano1, setPlano1] = useState('')
    const [venc1, setVenc1] = useState('')
    
    const enviar = async (e) => {

        if(nome1 === '', 
           email1 === '',
           telefoneRes1 === '', 
           telefoneCom1 === '',
           celular1 === '',
           rg1 === '',
           cpf1 === '',
           dataNasc1 === '', 
           cidade1 === '', 
           cep1 === '', 
           rua1 === '',
           numero1 === '',
           bairro1 === '',
           plano1=== '',venc1 === '' ){
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'deu ruim',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
            Swal.fire(

                    'Dados enviados com sucesso',
                    'Logo entraremos em contato!',
                    'success',
                    '2000000'
              
              )
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
            plano: plano1,
            vencimento: venc1,
        }
        const res = await fetch ('/api/online', {
            method: 'POST',
            body: JSON.stringify (addOnline),
            headers:{'Content-Type': 'application/json'}
        })

        }
 
    }
  
    const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
           
    
    return(
        <Container className= {styles['container']}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className= {styles['box']}>
                        <p className= {styles['dados']}>DADOS PESSOAIS</p>
                        <div className= {styles['traco']}></div>
                    </div>
                        <Row className="mb-4">
                            <Col>
                                <Form.Label>NOME COMPLETO</Form.Label>
                                <Form.Control required type='text' onChange={(e) => setNome1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control required type='email' onChange={(e) => setEmail1(e.target.value)} />
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Form.Label>TELEFONE RESIDENCIAL</Form.Label>
                                <Form.Control required type='tel'onChange={(e) => setTelefoneRes1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>TELEFONE COMERCIAL</Form.Label>
                                <Form.Control required type='tel' onChange={(e) => setTelefoneCom1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>CELULAR</Form.Label>
                                <Form.Control required type='tel' onChange={(e) => setCelular1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>RG</Form.Label>
                                <Form.Control required onChange={(e) => setRg1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control required type="text" placeholder="000.000.000-00" onChange={(e) => setCpf1(e.target.value)} />
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>DATA DE NASCIMENTO</Form.Label>
                                <Form.Control required type='date' onChange={(e) => setDataNasc1(e.target.value)}/>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <div className= {styles['box']}>
                            <p className= {styles['dados']}>ENDEREÇO</p>
                            <div className= {styles['traco']}></div>
                        </div>
                        <Row className="mb-4">
                            <Col>
                                <Form.Label>CIDADE/UF</Form.Label>
                                <Form.Select required onChange={(e) => setCidade1(e.target.value)}>
                                    <option> </option>
                                        <option>Campinaçu(GO) </option>
                                        <option>Minaçu(GO) </option>
                                        <option>Palmeirópolis(TO) </option>
                                        <option>Jáu(TO) </option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control  required onChange={(e) => setCep1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Label>RUA</Form.Label>
                                    <Form.Control required type='text' onChange={(e) => setRua1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Form.Label>NÚMERO</Form.Label>
                                    <Form.Control required onChange={(e) => setNumero1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Label>BAIRRO</Form.Label>
                                    <Form.Control required onChange={(e) => setBairro1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Form.Label>COMPLEMENTO</Form.Label>
                                    <Form.Control required type="text" onChange={(e) => setComplemento1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Form.Label>DISTRITO</Form.Label>
                                    <Form.Control required type='text' onChange={(e) => setDistrito1(e.target.value)}/>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <div className= {styles['box']}>
                                <p className= {styles['dados']}>DADOS DA COBRANÇA</p>
                                <div className= {styles['traco']}></div>
                            </div>
                            <Row>
                            <Col>
                                    <Form.Label>PLANO</Form.Label>
                                    <Form.Select required onChange={(e) => setPlano1(e.target.value)}>
                                    <option> </option>
                                        <option> Básico - 5 gigas - R$31,99</option>
                                        <option> Médio - 8 gigas - R$42,99</option>
                                        <option> Avançado - 13 gigas - R$55,99</option>
                                        <option> Pro - 21 gigas - R$69,99</option>
                                        <option> Mestre - 35 gigas - R$79,99</option>
                                        <option> Chefe - 50 gigas - R$89,99</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>VENCIMENTO</Form.Label>
                                    <Form.Select required onChange={(e) => setVenc1(e.target.value)}>
                                        <option> </option>
                                        <option>05</option>
                                        <option> 10</option> 
                                        <option>15</option>           
                                    </Form.Select>
                                    <Form.Control.Feedback type='invalid'>*Campo obrigatorio</Form.Control.Feedback>
                            </Col>
                            </Row>
                        <div>
                            <p className= {styles['dados']}>BOLETO REGISTRADO</p>
                        </div>
                            <Form.Check type="checkbox" label="Boleto Registrado " checked/>
                            <div>
                            <p className= {styles['dados']}>TERMOS E CONDIÇÕES</p>
                            <span className= {styles['termo']}>Ao finalizar o seu pedido, você estará concordando com os nossos <a style={{ color: 'purple'}}>Termos e condições </a></span>
                        </div>

                            <div className="d-flex justify-content-center">
                                <Button className= {styles['botao']} variant='secondary' size='lg' type='submit'  onClick={enviar}> Finalizar</Button>
                        </div>
                        </Form>    
        </Container>
    )
}

export default FormCadastro;