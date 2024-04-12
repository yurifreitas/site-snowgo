import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Container } from 'react-bootstrap';

import cubes from '~/assets/img/carousel/diretorio_otimizado/left_cubes.svg';
import cubeOrange from '~/assets/img/carousel/diretorio_otimizado/cube_orange.svg';
import cubeBlue from '~/assets/img/carousel/diretorio_otimizado/cube_blue.svg';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import { Background } from './styles';
import { Wrapper } from '../styles';

export default function First() {
  const title = useRef(null);
  const frase = useRef(null);
  const button = useRef(null);
  const cubeBlueImg = useRef(null);
  const cubeOrangeImg = useRef(null);
  const cubesImg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to([title.current, frase.current], { opacity: 1, top: '0', duration: 0.7 })
      .to(button.current, { opacity: 1, duration: 0.7 })
      .to(cubeBlueImg.current, { opacity: 1, duration: 0.7 })
      .to(cubeOrangeImg.current, { opacity: 1, duration: 0.7 })
      .to(cubesImg.current, { opacity: 1, duration: 1.2 });
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1 ref={title} style={{ opacity: 0, position: 'relative', bottom: '2em' }}>
          O único delivery focado em gelo
        </h1>

        <Frase ref={frase} style={{ opacity: 0, position: 'relative', bottom: '2em' }}>
          Vê se não esquenta!
        </Frase>

        <Button
          ref={button}
          style={{ opacity: 0 }}
          href="https://api.whatsapp.com/send?phone=5511945592940"
        >
          Peça agora
        </Button>
      </Container>

      <Background>
        <img ref={cubeBlueImg} style={{ opacity: 0 }} src={cubeBlue} alt="Cubo azul" className="cube blue" />
        <img ref={cubeOrangeImg} style={{ opacity: 0 }} src={cubeOrange} alt="Cubo laranja" className="cube orange" />
        <img ref={cubesImg} style={{ opacity: 0 }} src={cubes} alt="Cubos de gelo" className="cube cubes" />
      </Background>
    </Wrapper>
  );
}
