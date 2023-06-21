import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Plano.module.css'
import NavBar from '@/componets/palmeiropolis/navBarMinacu'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componets/palmeiropolis/navegar'
import TablePlan from '@/componets/palmeiropolis/tabelaPlano';
import Rodape from '@/componets/rodape';
import BannerHome from '@/componets/bannerHome';

const inter = Inter({ subsets: ['latin'] })

export default function Plano() {
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
      <BannerHome/>
      <TablePlan/>
      <Rodape/>
      </div>
    </>
  )
}