import styles from '@/styles/Online.module.css'
import { Button, Container, Stack } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';



function FormCadastro(){

    const router = useRouter();

    function handleClick(){
        router.push('/pagamento')
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
                        <Form.Control type='name'/>
                    </Col>
                    <Col>
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type='email' />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>TELEFONE RESIDENCIAL</Form.Label>
                        <Form.Control type='tel'/>
                    </Col>
                    <Col>
                        <Form.Label>TELEFONE COMERCIAL</Form.Label>
                        <Form.Control type='tel' />
                    </Col>
                    <Col>
                        <Form.Label>CELULAR</Form.Label>
                        <Form.Control type='tel' />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>RG</Form.Label>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="000.000.000-00" />
                    </Col>
                    <Col>
                        <Form.Label>DATA DE NASCIMENTO</Form.Label>
                        <Form.Control type='date' />
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
                        <Form.Label>CIDADE</Form.Label>
                        <Form.Select >
                                <option> Cidade / UF</option>
                                <option>Minaçu(GO) </option>
                                <option>Campinaçu(GO) </option>
                                <option>Palmeirópolis(TO) </option>
                                <option>Jáu(TO) </option>
                            </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control  />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>RUA</Form.Label>
                        <Form.Control type='text'/>
                    </Col>
                    <Col>
                        <Form.Label>NÚMERO</Form.Label>
                        <Form.Control  />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Label>BAIRRO</Form.Label>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Form.Label>COMPLEMENTO</Form.Label>
                        <Form.Control type="text" />
                    </Col>
                    <Col>
                        <Form.Label>DISTRITO</Form.Label>
                        <Form.Control type='text' />
                    </Col>
                </Row>
            </Form>
            <div className="d-flex justify-content-center">
                <Button className= {styles['botao']} variant='secondary' size='lg' onClick={handleClick}> Continuar</Button>
            </div>
        </Container>
    )
}
export default FormCadastro;