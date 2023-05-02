import Table from 'react-bootstrap/Table';
import styles from '@/styles/Plano.module.css'


function TablePlan() {
  return (
        <Table responsive className= {styles['tablePlan']} >
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
          <td> </td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>50</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>89</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        <tr>
          <td className= {styles['titulo']}> Residencial</td>
          <td> </td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>300</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>99</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        <tr>
          <td className= {styles['titulo']}> Residencial</td>
          <td> + paramount </td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>400</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>199</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        <tr>
          <td className= {styles['titulo']}> Residencial</td>
          <td> + paramount</td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>1000</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>169</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        <tr>
          <td className= {styles['titulo']}> Empresarial</td>
          <td> + IP fixo + Prioriade na fila de atendimento </td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>400</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>199</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        <tr>
          <td className= {styles['titulo']}> Empresarial</td>
          <td> + IP fixo + Prioriade na fila de atendimento </td>
          <td> 
            <div>
                <div>
                    <span className= {styles['quant']}>1000</span>
                    <span className= {styles['mega']}>MEGA</span>
                </div>
                <div>
                    <sup className= {styles['cifrao']}>R$</sup>
                    <div className= {styles['valor']}>
                        <span className= {styles['inteiro']}>349</span>
                        <span className= {styles['centavo']}>,90</span>
                        <sub className= {styles['mes']}>/mês</sub>
                    </div>
                </div>
            </div>
        </td>
        </tr>
        
      </tbody>
    </Table>

    
  );
}

export default TablePlan;  