import { Button, Container, Image, Stack } from "react-bootstrap";
import styles from '@/styles/Confirmacao.module.css'
import Link from "next/link";




function Confirmacao(){

    return(
        <Container className= {styles['box']}>
            <Stack direction="horizontal" gap={6}>
                <Image src="/check.png" width={30} height={30}></Image>
                <strong className= {styles['cadastro']}>Cadastro</strong>
                <Image src="/check.png" width={30} height={30}></Image>
                <strong className= {styles['cadastro']}>Cobrança</strong>
                <strong className= {styles['numero']}>3</strong>
                <strong className= {styles['nome']}>Confirmação</strong>
            </Stack>
            <br />
            <br />

            <Container className= {styles['container']}>
                <h1>Seus dados foram enviados com sucesso para nosso centro comercial.</h1>
                <h2>Logo logo entraremos em contato!</h2>
                <h3>Obrigado...</h3>
                <br />
                <Link href="/home">
                    <Button className= {styles['botao']} size="lg" >Voltar</Button>
                </Link>
            </Container>
            

        </Container>

    )

}
export default Confirmacao;