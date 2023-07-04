import styles from '@/styles/Card.module.css'
import { Container, Image} from 'react-bootstrap';


function Texto() {
    return (
        <Container>
        <div  className= {styles['div']}>
            <div className= {styles['tela']}>
                <div className= {styles['box1']}>
                    <h1 className= {styles['titulo']}>
                        Quem somos?
                    </h1>
                    <h3 className= {styles['texto']}>
                    A Integrato Internet surgiu no ano de 2013 na cidade de Minaçu-GO, oferendo planos de internet via-rádio para toda zona urbana e 
                    rural do município. Sempre em busca da melhor e mais inovadora tecnologia que há no mercado,
                        em 2016, fomos o primeiro provedor da região e um dos primeiros do Norte Goiano a oferecer ao nossos clientes internet com a tecnologia de Fibra Óptica. 
                    </h3>
                </div>
                <div className= {styles['box2']}>
                    <Image src='/bio1.png' width={300}></Image>
                </div>

            </div>
            <div className= {styles['tela']}>
                <div className= {styles['box2']}>
                    <Image src='/bio3.png' width={350}></Image>
                </div>
            <div className= {styles['box1']}>
                <h3 className= {styles['texto']}>Após nos consolidarmos com mais de 70% de marketshare na cidade de minaçu, em 2021 realizamos a nossa primeira expansão para a cidade de Campinaçu-GO. No inicio de 2022,
  seguimos em rápida expansão para o sul do tocantins, onde realizamos aquisições nas cidades de Palmeirópolis-to, Montevidiu/Mata azul-GO, e em seguida Novo-Horizonte e Jaú do Tocantins-TO.
   Para proporcionar essa expansão, realizamos investimentos maciços em infraestrutura e backbone óptico com mais de 400km interligando essas cidades e aumentando nossa capacidade de atuação.
                </h3>
            </div>

            </div>
            <div className= {styles['tela']}>
                <div className= {styles['box1']}>
                    <h3 className= {styles['texto']}>
                    Ainda no mesmo ano, mudamos nossa identidade, e Integrato Internet passou a ser Integrato Fibra. Buscando crescimento e inovação no nosso mercado, diversificamos nosso portfólio de produtos,
  entregando além de serviços de internet, também soluções de conectividade para empresas, não se limitando somente a essas cidades mas em toda região norte do Goiás e Sul do Tocantins.
                    </h3>
                </div>
                <div className= {styles['box2']}>
                    <Image src='/bio4.png' width={400}></Image>
                </div>

            </div>
        </div>
        </Container>
     

       


       
//             <Row xs={1} md={2} className="g-6">

//                 <Col>
//                     <Card className= {styles['card']}>
//                         <Image src='/bio1.png' ></Image>
//                     </Card>
//                 </Col>
//                 <Col>

//                 <Card className= {styles['card']}>
//                 <div className= {styles['texto']}> A Integrato Internet surgiu no ano de 2013 na cidade de Minaçu-GO, 
//                 oferendo planos de internet via-rádio para toda zona urbana e rural do município. Sempre em busca da melhor e mais inovadora tecnologia que há no mercado,
//                  em 2016, fomos o primeiro provedor da região e um dos primeiros do Norte Goiano a oferecer ao nossos clientes internet com a tecnologia de Fibra Óptica. 
//             </div>
//                 </Card>
//                 </Col>
//                 <Col>
//                 <Card>
//                     <div>Após nos consolidarmos com mais de 70% de marketshare na cidade de minaçu, em 2021 realizamos a nossa primeira expansão para a cidade de Campinaçu-GO. No inicio de 2022,
//  seguimos em rápida expansão para o sul do tocantins, onde realizamos aquisições nas cidades de Palmeirópolis-to, Montevidiu/Mata azul-GO, e em seguida Novo-Horizonte e Jaú do Tocantins-TO.
//   Para proporcionar essa expansão, realizamos investimentos maciços em infraestrutura e backbone óptico com mais de 400km interligando essas cidades e aumentando nossa capacidade de atuação.
// Ainda no mesmo ano, mudamos nossa identidade, e Integrato Internet passou a ser Integrato Fibra. Buscando crescimento e inovação no nosso mercado, diversificamos nosso portfólio de produtos,
//  entregando além de serviços de internet, também soluções de conectividade para empresas, não se limitando somente a essas cidades mas em toda região norte do Goiás e Sul do Tocantins.</div>
//                 </Card>
//                 </Col>
                
//                 <Card className= {styles['card']}>
//                     <Image src='/bio2.png' ></Image>
//                 </Card>
            


//             </Row>
            
           
    )
}
export default Texto;