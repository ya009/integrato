import Table from 'react-bootstrap/Table';
import styles from '@/styles/Fibra.module.css'
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function TableTelecom() {

    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    function handleClick(){
        router.push('/campinacu/contrateTelecom')
    }

    useEffect(() => {
        const checkIsMobile = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
    
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);

  return (

    <div className={styles['div']}>
    {isMobile ? (
        <div>
      <Card className={styles['card']}>
        <div className={styles['titulo']}>Básico</div>
        <div className={styles['descricao']}>
        2 GB + 1 GB Portabilidade + 100 minutos
        </div>
        <div className= {styles['cima']}>
            <span className= {styles['quant']}>5</span>
            <span className= {styles['mega']}>GB</span>
            
            <span className= {styles['inteiro']}> 31</span>
            <div className= {styles['boxRight']}>
                <span className= {styles['centavo']}>,99</span>
                <sub className= {styles['mes']}>/mês</sub>
        </div>
        </div>
        <div className={styles['plan-box']}>
          <Button onClick={handleClick} className={styles['botao']}>
            Contrate
          </Button>
        </div>
      </Card>
      <Card className={styles['card']}>
      <div className={styles['titulo']}>Médio</div>
      <div className={styles['descricao']}>
      4 GB + 1 GB Portabilidade + chamadas ilimitadas
      </div>
      <div className= {styles['cima']}>
          <span className= {styles['quant']}>8</span>
          <span className= {styles['mega']}>GB</span>
          
          <span className= {styles['inteiro']}> 42</span>
          <div className= {styles['boxRight']}>
              <span className= {styles['centavo']}>,99</span>
              <sub className= {styles['mes']}>/mês</sub>
      </div>
      </div>
      <div className={styles['plan-box']}>
        <Button onClick={handleClick} className={styles['botao']}>
          Contrate
        </Button>
      </div>
    </Card>
    <Card className={styles['card']}>
        <div className={styles['titulo']}>Avançado</div>
        <div className={styles['descricao']}>
        7 GB + 1 GB Portabilidade + chamadas ilimitadas 
        </div>
        <div className= {styles['cima']}>
            <span className= {styles['quant']}>13</span>
            <span className= {styles['mega']}>GB</span>
            
            <span className= {styles['inteiro']}> 55</span>
            <div className= {styles['boxRight']}>
                <span className= {styles['centavo']}>,99</span>
                <sub className= {styles['mes']}>/mês</sub>
        </div>
        </div>
        <div className={styles['plan-box']}>
          <Button onClick={handleClick} className={styles['botao']}>
            Contrate
          </Button>
        </div>
      </Card>
      <Card className={styles['card']}>
        <div className={styles['titulo']}>Pro</div>
        <div className={styles['descricao']}>
        11 GB + 1 GB Portabilidade + chamadas ilimitadas
        </div>
        <div className= {styles['cima']}>
            <span className= {styles['quant']}>21</span>
            <span className= {styles['mega']}>GB</span>
            
            <span className= {styles['inteiro']}> 69</span>
            <div className= {styles['boxRight']}>
                <span className= {styles['centavo']}>,99</span>
                <sub className= {styles['mes']}>/mês</sub>
        </div>
        </div>
        <div className={styles['plan-box']}>
          <Button onClick={handleClick} className={styles['botao']}>
            Contrate
          </Button>
        </div>
      </Card>
      <Card className={styles['card']}>
        <div className={styles['titulo']}>Mestre</div>
        <div className={styles['descricao']}>
        18 GB + 2 GB Portabilidade + chamadas ilimitadas
        </div>
        <div className= {styles['cima']}>
            <span className= {styles['quant']}>35</span>
            <span className= {styles['mega']}>GB</span>
            
            <span className= {styles['inteiro']}> 79</span>
            <div className= {styles['boxRight']}>
                <span className= {styles['centavo']}>,99</span>
                <sub className= {styles['mes']}>/mês</sub>
        </div>
        </div>
        <div className={styles['plan-box']}>
          <Button onClick={handleClick} className={styles['botao']}>
            Contrate
          </Button>
        </div>
      </Card>
      <Card className={styles['card']}>
        <div className={styles['titulo']}>Chefe</div>
        <div className={styles['descricao']}>
        25 GB + 5 GB Portabilidade + chamadas ilimitadas
        </div>
        <div className= {styles['cima']}>
            <span className= {styles['quant']}>50</span>
            <span className= {styles['mega']}>GB</span>
            
            <span className= {styles['inteiro']}> 89</span>
            <div className= {styles['boxRight']}>
                <span className= {styles['centavo']}>,99</span>
                <sub className= {styles['mes']}>/mês</sub>
        </div>
        </div>
        <div className={styles['plan-box']}>
          <Button onClick={handleClick} className={styles['botao']}>
            Contrate
          </Button>
        </div>
      </Card>
    </div>
      
    ) : (
      <div className= {styles['div']}>
    <Container className= {styles['geral']}>
        <Card className= {styles['container']}>
        <div className="table-responsive">
        <Table  className= {styles['tablePlan']} >
            <thead className= {styles['table']}>
                <tr>
                    <th>Plano</th>
                    <th>Descrição</th>
                    <th>Valores</th>
                    </tr>
            </thead>
            <tbody>
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Básico</td>
                    <td className= {styles['descricao']}> 2 GB + 1 GB Portabilidade + 100 minutos.</td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>5</span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>31</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                                    <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr >
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Médio</td>
                    <td className= {styles['descricao']}> 4 GB + 1 GB Portabilidade + chamadas ilimitadas</td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>8</span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>42</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                            <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Avançado</td>
                    <td className= {styles['descricao']}> 7 GB + 1 GB Portabilidade + chamadas ilimitadas </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>13</span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>55</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                            <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Pro</td>
                    <td className= {styles['descricao']}>11 GB + 1 GB Portabilidade + chamadas ilimitadas</td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>21 </span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>69</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                            <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Mestre</td>
                    <td className= {styles['descricao']}> 18 GB + 2 GB Portabilidade + chamadas ilimitadas </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>35</span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>79</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                            <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Chefe</td>
                    <td className= {styles['descricao']}> 25 GB + 5 GB Portabilidade + chamadas ilimitadas </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>50</span>
                                        <span className= {styles['mega']}>GB</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>89</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,99</span>
                                            <sub className= {styles['mes']}>/mês</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['button-container']}>
                            <Button  onClick={handleClick} variant="secondary" className= {styles['botao']} >Contrate</Button>
                            </div>
                        </div>
                    </td>
                </tr>    
            </tbody>
        </Table>
        </div>
    </Card>    
    </Container>  
    </div> 
    )}
  </div>

    
  );
}
export default TableTelecom;  