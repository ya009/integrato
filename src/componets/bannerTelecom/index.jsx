import styles from '@/styles/Banner.module.css'

function BannerTelecom(){
    return(

        <div className= {styles['telecom']}>
            <div className= {styles['telecomDiv']}>
               <h2>A maior rede 4G do Brasil </h2> 
               <h2>Cobertura em 100% dos municípios</h2>
               <h2>Atendimento pela Integrato Fibra</h2>
               <h2>Atendimento pela Integrato Fibra</h2>
               <h2>Portabilidade em todo Brasil</h2>
            </div>
        </div>

    )
}
export default BannerTelecom;