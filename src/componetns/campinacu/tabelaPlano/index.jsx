import Table from 'react-bootstrap/Table';
import styles from '@/styles/Fibra.module.css'
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

function TablePlan() {

    const router = useRouter();

    function handleClick(){
        router.push('/campinacu/contrate')
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
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> Para você, que mora sozinho e pouco se transforma em muito. Este é o seu plano ideal.</td>
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
                </tr >
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> Sua casa necessita de muita entrega e velocidade? Este plano foi feito para você! Com 300 mega você pode tudo.  </td>
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
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> Para você que além de internet curte um streaming, aqui nós de damos acesso a plataforma Paramount. </td>
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
                <tr className= {styles['tr']}>
                    <td className= {styles['titulo']}> Residencial</td>
                    <td className= {styles['descricao']}> Trabalha em casa? Curte um jogo? E um Streaming? 1000 megas náo é para qualquer um, ainda mais com o acesso a plataforma Paramount. Este plano é para você</td>
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
                <tr className= {styles['tr']}>
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
                <tr className= {styles['tr']}>
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
    </Container>  
    </div> 
  );
}
export default TablePlan;  