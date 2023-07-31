import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/componetns/jau/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/jau/navegar'
import Rodape from '@/componetns/jau/rodape'
import Aplicativo from '@/componetns/aplicativo'
import BannerMeio from '@/componetns/jau/bannerMeio'
import Slide from '@/componetns/jau/slide'
import BannerNumero from '@/componetns/bannerNumero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Integratto</title>
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
