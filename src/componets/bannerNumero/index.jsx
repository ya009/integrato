import styles from '@/styles/Banner.module.css'
import React from 'react';
import { Image } from 'react-bootstrap';

function BannerNumero(){

    return(
    <div className= {styles['boxnumero']}>
        <Image src="/bannerNumero.png" className= {styles['numero']} ></Image>

    </div>
    )
}
export default BannerNumero;