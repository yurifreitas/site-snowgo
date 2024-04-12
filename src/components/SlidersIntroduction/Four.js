import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';
import Bucket from '~/components/Bucket';

import phone from '~/assets/img/diretorio_otimizado/phone_line.svg';

import { Container, Elements } from './styles';

export default function Four() {
  const title = useRef(null);
  const frase = useRef(null);
  const phoneIcon = useRef(null);
  const bucket = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (title.current && phoneIcon.current && bucket.current && frase.current) {
      tl.from([title.current, phoneIcon.current], { y: '-10', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .from(bucket.current, { y: '50', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .from(frase.current, { y: '50', opacity: 0, ease: Power3.easeOut, duration: 1 });
    }
  }, []);

  return (
    <Container>
      <h1 ref={title} style={{ fontSize: 48, lineHeight: '46px', marginTop: 70 }}>
        Facilidade em fazer seu pedido
      </h1>

      <div ref={bucket}>
        <Bucket link="https://api.whatsapp.com/send?phone=5511945592940">peça agora</Bucket>
      </div>

      <Frase ref={frase} style={{ fontSize: 53 }}>
        para a festa não acabar!
      </Frase>

      <Elements>
        <img ref={phoneIcon} src={phone} alt="Phone" className="element" style={{ left: 'auto', right: '-3.5em', top: '14em', transform: 'rotate(-20deg)' }} />
      </Elements>
    </Container>
  );
}
