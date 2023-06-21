import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from '@/styles/Banner.module.css'

function Slide() {
  return (
    <Container className= {styles['slide']}>
        <Carousel slide={false}>
      <Carousel.Item>
        <img className= {styles['img']}
          src="/slide1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className= {styles['img']}
          src="/slide2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className= {styles['img']}
          src="/slide3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className= {styles['titulo']}>
      <h1>
        Saiba mais sobre o maior <strong>provedor de internet</strong> do interior do Brasil.
      </h1>
      <Button className= {styles['botBio']}>Conheça a Integrato</Button>
    </div>

    </Container>
    
  );
}
export default Slide;