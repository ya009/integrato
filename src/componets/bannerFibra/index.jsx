import styles from '@/styles/Banner.module.css'

function BannerFibra(){
    return(

        <div className= {styles['fibra']}>
            <div className= {styles['fibraDiv']}>
               <h2>Procurando o <strong>melhor plano de internet</strong>, com maior velocidade e estabilidade de conexão?</h2> 
            </div>
        </div>

    )
}
export default BannerFibra;