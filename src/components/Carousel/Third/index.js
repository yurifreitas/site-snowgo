import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';

import cubes from '~/assets/img/carousel/diretorio_otimizado/cubes_random.svg';
import cubeOrange from '~/assets/img/carousel/diretorio_otimizado/cube_orange.svg';
import cubeBlue from '~/assets/img/carousel/diretorio_otimizado/cube_blue.svg';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import { Wrapper, Background } from './styles';

export default function Third() {
  let button = useRef(null);

  useEffect(() => {
    // Animação que aumenta a opacidade do botão
    gsap.to(button.current, { opacity: 1, duration: 1 });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <h1 className="title">Entrega</h1>
            <Frase className="frase" style={{ marginBottom: '1em' }}>
              O gelo acabou? Nós entregamos!
            </Frase>
            <Button
              ref={button}
              style={{ opacity: 0 }}  // O botão começa invisível e se torna visível através da animação
              href="https://api.whatsapp.com/send?phone=5511945592940"
            >
              Peça agora
            </Button>
          </Col>
        </Row>
      </Container>

      <Background>
        <img src={cubeBlue} alt="Cubo azul" className="cube blue" />
        <img src={cubeOrange} alt="Cubo laranja" className="cube orange" />
        <img src={cubes} alt="Cubos aleatórios" className="cube cubes" />
      </Background>
    </Wrapper>
  );
}
