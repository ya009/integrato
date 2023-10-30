import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/componetns/campinacu/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/campinacu/navegar'
import Rodape from '@/componetns/campinacu/rodape'
import Aplicativo from '@/componetns/aplicativo'
import BannerMeio from '@/componetns/campinacu/bannerMeio'
import Slide from '@/componetns/campinacu/slide'
import BannerNumero from '@/componetns/bannerNumero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Integrato</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <div className= {styles['body']}>
      <Navegacao/>
      <Aplicativo/>
      <BannerMeio/>
      <BannerNumero/>
      <Slide/>
      <Rodape/>
      </div>
    </>
  )
}
