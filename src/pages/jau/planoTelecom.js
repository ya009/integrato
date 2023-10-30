import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/componetns/jau/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/jau/navegar'
import TablePlan from '@/componetns/jau/tabelaPlano';
import Rodape from '@/componetns/jau/rodape';
import BannerTelecom from '@/componetns/bannerTelecom';
import TableTelecom from '@/componetns/jau/tabelaTelecom';



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
      <Navegacao/>
      <BannerTelecom/>
      <TableTelecom/>
      <Rodape/>
    </>
  )
}