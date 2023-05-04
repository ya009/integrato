import Table from 'react-bootstrap/Table';
import styles from '@/styles/Plano.module.css'
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';


function TablePlan() {

    const router = useRouter();

    function handleClick(){
        router.push('/contrate')
    }

  return (
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
                <tr>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>50</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>89</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
                <tr>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>300</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>99</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
                <tr>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> + Paramount </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>400</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>119</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
                <tr>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> + Paramount</td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>1000</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>169</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
                <tr>
                    <td className= {styles['titulo']}> Empresarial</td>
                    <td className= {styles['descricao']}> + IP fixo + prioridade na fila de atendimento e Configuração de até 3 equipamento incluso no plano e consultório especializada. </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>400</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>199</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
                <tr>
                    <td className= {styles['titulo']}> Empresarial</td>
                    <td className= {styles['descricao']}> + IP fixo + prioridade na fila de atendimento e Configuração de até 3 equipamento incluso no plano e consultório especializada. </td>
                    <td> 
                        <div className= {styles['plan-box']}>
                            <div className= {styles['box']}>
                                <div>
                                    <div className= {styles['cima']}>
                                        <span className= {styles['quant']}>1000</span>
                                        <span className= {styles['mega']}>mega</span>
                                    </div>
                                    <div className= {styles['valor']}>
                                        <sup className= {styles['cifrao']}>R$</sup>
                                        <span className= {styles['inteiro']}>349</span>
                                        <div className= {styles['boxRight']}>
                                            <span className= {styles['centavo']}>,90</span>
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
  );
}
export default TablePlan;  