import React,{ useRef, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { TimelineMax } from 'gsap';
import cubes from '~/assets/img/carousel/cubes_random.svg';
import cubeOrange from '~/assets/img/carousel/cube_orange.svg';
import cubeBlue from '~/assets/img/carousel/cube_blue.svg';

import truckSchedule from '~/assets/img/slider/entrega_programada.svg';
import truckExpress from '~/assets/img/slider/entrega_express.svg';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';
import {
  Wrapper,
  Background,
  DeliveryContainer,
  DeliveryType,
  Vantagens,
} from './styles';

export default function Third() {
  let button = useRef(null);
  const tl = new TimelineMax();
  useEffect(() => {
    tl.to(button, 0.7, { opacity: 1 }, 1)  
  }, [tl]);
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <h1 className="title">entrega</h1>

            <Frase className="frase" style={{ 'margin-bottom': '1em' }}>o gelo acabou? nós entregamos!</Frase>
            <Button
          ref={el => (button = el)}
          style={{ opacity: 0 }}
          href="https://snowgo.menudino.com/"
        >
          peça agora
        </Button>
          </Col>
          
        </Row>
      </Container>

      <Background>
        <img src={cubeBlue} alt="Cube" className="cube blue" />
        <img src={cubeOrange} alt="Cube" className="cube orange" />
        <img src={cubes} alt="Cube" className="cube cubes" />
      </Background>
    </Wrapper>
  );
}
