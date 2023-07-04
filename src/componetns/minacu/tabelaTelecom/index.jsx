import Table from 'react-bootstrap/Table';
import styles from '@/styles/Plano.module.css'
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

function TableTelecom() {

    const router = useRouter();

    function handleClick(){
        router.push('/minacu/contrate')
    }

  return (
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
    
  );
}
export default TableTelecom;  