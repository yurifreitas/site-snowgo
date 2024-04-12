import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';

import cube from '~/assets/img/slider/diretorio_otimizado/cube.svg';
import cube3 from '~/assets/img/slider/diretorio_otimizado/cube_3.svg';
import danger from '~/assets/img/slider/diretorio_otimizado/danger.svg';

import { Container, Elements } from './styles';

export default function Second() {
  const title = useRef(null);
  const frase = useRef(null);
  const cubeTopBlue = useRef(null);
  const dangerBottom = useRef(null);
  const dangerTop = useRef(null);
  const cubeBottomBlue = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (title.current && cubeTopBlue.current && frase.current && dangerBottom.current && dangerTop.current && cubeBottomBlue.current) {
      tl.from(title.current, { y: '-600', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .from([cubeTopBlue.current, dangerBottom.current], { x: '-50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5')
        .from(frase.current, { y: '50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5')
        .from([dangerTop.current, cubeBottomBlue.current], { x: '50', opacity: 0, ease: Power3.easeOut, duration: 1 }, '-=0.5');
    }
  }, []);

  return (
    <Container>
      <div className="crop">
        <h1 ref={title} style={{ marginTop: 50 }}>
          Festa com cerveja trincando!
        </h1>
      </div>

      <Frase ref={frase}>Não deixe a festa esquentar!</Frase>

      <Elements>
        <img ref={cubeTopBlue} src={cube} alt="Cube" className="element" style={{ transform: 'rotate(-180deg)', left: '-3em' }} />
        <img ref={dangerTop} src={danger} alt="Danger" className="element danger" />
        <img ref={dangerBottom} src={danger} alt="Danger" className="element danger2" />
        <img ref={cubeBottomBlue} src={cube3} alt="Cube" className="element cube3" style={{ top: '35em', width: '30%' }} />
      </Elements>
    </Container>
  );
}
