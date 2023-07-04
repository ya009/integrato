import { Button, ButtonGroup, Container, Image, Stack } from "react-bootstrap";
import styles from '@/styles/Pagamento.module.css'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from "next/router";

function Pagamento(){

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  }
  const router = useRouter();

  function handleClick(){
      router.push('/confirmacao')
  }

    return(
        <Container>
            <Stack direction="horizontal" gap={6}>
                <Image src="/check.png" width={30} height={30}></Image>
                <strong className= {styles['cadastro']}>Cadastro</strong>
                <strong className= {styles['numero']}>2</strong> 
                <strong className= {styles['nome']}>Cobrança</strong>
                <div className= {styles['numero']}>3</div>
                <div className= {styles['nome']}>Confirmação</div>
            </Stack>
            <Container>
                <div>
                    <p className= {styles['dados']}>DATA DE VENCIMENTO</p>
                </div>
                <div className="container rounded p-3">
                    <ButtonGroup className="d-flex justify-content-center" aria-label="Botões de pagamento" size="lg">
                        <Button variant={selectedButton === 'button1' ? 'secondary' : 'outline-secondary'} onClick={() => handleButtonClick('button1')} disabled={selectedButton === 'button1'}>
                            05
                        </Button>
                        <Button variant={selectedButton === 'button2' ? 'secondary' : 'outline-secondary'} onClick={() => handleButtonClick('button2')} disabled={selectedButton === 'button2'}>
                            10
                        </Button>
                        <Button variant={selectedButton === 'button3' ? 'secondary' : 'outline-secondary'} onClick={() => handleButtonClick('button3')} disabled={selectedButton === 'button3'}>
                            15
                        </Button>
                    </ButtonGroup>
                </div>
            </Container>
            <Container>
                <div>
                    <p className= {styles['dados']}>BOLETO REGISTRADO</p>
                </div>
                <Form className={styles['form']}>
                    <Form.Check type="checkbox" label="Boleto Registrado " checked/>
                </Form>
            </Container>
            <Container>
                <div>
                    <p className= {styles['dados']}>TERMOS E CONDIÇÕES</p>
                    <span className= {styles['termo']}>Ao finalizar o seu pedido, você estará concordando com os nossos <a style={{ color: 'purple'}}>Termos e condições </a></span>
                </div>
            </Container>
            <Button className= {styles['botao']} size="lg" onClick={handleClick}>Finalizar</Button>
        </Container>
    )
}
export default Pagamento;