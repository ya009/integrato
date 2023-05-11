import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from '@/styles/Home.module.css'

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

    </Container>
    
  );
}
export default Slide;