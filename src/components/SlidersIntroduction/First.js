import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import cube from '~/assets/img/slider/diretorio_otimizado/cube.svg';
import cube2 from '~/assets/img/slider/diretorio_otimizado/cube_2.svg';
import cube3 from '~/assets/img/slider/diretorio_otimizado/cube_3.svg';

import { Container, Elements } from './styles';

export default function First() {
  const title = useRef(null);
  const frase = useRef(null);
  const cubeTopBlue = useRef(null);
  const cubeTopOrange = useRef(null);
  const cubeBottomBlue = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (title.current && cubeTopBlue.current && frase.current && button.current && cubeTopOrange.current && cubeBottomBlue.current) {
      tl.from(title.current, { y: '-600', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .from(cubeTopBlue.current, { x: '-50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5')
        .from(frase.current, { y: '50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5')
        .from(button.current, { y: '-50', opacity: 0, ease: Power3.easeOut, duration: 0.5 }, '-=0.5')
        .from([cubeTopOrange.current, cubeBottomBlue.current], { x: '50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5');
    }
  }, []);

  return (
    <Container>
      <div className="crop">
        <h1 ref={title}>O único delivery focado em gelo</h1>
      </div>

      <Frase ref={frase}>vê se não esquenta!</Frase>

      <Button ref={button} color="orange">
        programe sua entrega
      </Button>

      <Elements>
        <img ref={cubeTopBlue} src={cube} alt="Cube" className="element" />
        <img ref={cubeTopOrange} src={cube2} alt="Cube" className="element cube2" />
        <img ref={cubeBottomBlue} src={cube3} alt="Cube" className="element cube3" />
      </Elements>
    </Container>
  );
}
