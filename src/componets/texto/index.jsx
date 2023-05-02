import styles from '@/styles/Institucional.module.css'
import { Container } from 'react-bootstrap';


function Texto() {
    return (
        <Container className="text-center py-3">
           <div className= {styles['texto']}> A Integrato Internet surgiu no ano de 2013 na cidade de Minaçu-GO, oferendo planos de internet via-rádio para toda zona urbana e rural do município. Sempre em busca da melhor e mais inovadora tecnologia que há no mercado, em 2016, fomos o primeiro provedor da região e um dos primeiros do Norte Goiano a oferecer ao nossos clientes internet com a tecnologia de Fibra Óptica. 
Após nos consolidarmos com mais de 70% de marketshare na cidade de minaçu, em 2021 realizamos a nossa primeira expansão para a cidade de Campinaçu-GO. No inicio de 2022, seguimos em rápida expansão para o sul do tocantins, onde realizamos aquisições nas cidades de Palmeirópolis-to, Montevidiu/Mata azul-GO, e em seguida Novo-Horizonte e Jaú do Tocantins-TO. Para proporcionar essa expansão, realizamos investimentos maciços em infraestrutura e backbone óptico com mais de 400km interligando essas cidades e aumentando nossa capacidade de atuação.
Ainda no mesmo ano, mudamos nossa identidade, e Integrato Internet passou a ser Integrato Fibra. Buscando crescimento e inovação no nosso mercado, diversificamos nosso portfólio de produtos, entregando além de serviços de internet, também soluções de conectividade para empresas, não se limitando somente a essas cidades mas em toda região norte do Goiás e Sul do Tocantins.
            </div>
        </Container>
    )
}
export default Texto;