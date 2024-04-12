import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import truckLine from '~/assets/img/diretorio_otimizado/entrega_express_line.svg';

import {
  Container,
  Elements,
  FraseThird,
} from './styles';

export default function Third() {
  const title = useRef(null);
  const truck = useRef(null);
  const deliveryTypes = useRef(null);
  const frase = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (title.current && truck.current && deliveryTypes.current && frase.current) {
      tl.from([title.current, truck.current], { y: '-10', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .to(truck.current, { scaleX: -1, duration: 1 })
        .from(deliveryTypes.current, { y: '-20', opacity: 0, ease: Power3.easeOut, duration: 1 })
        .from(frase.current, { y: '50', opacity: 0, ease: Power3.easeOut, duration: 1 });
    }
  }, []);

  return (
    <Container>
      <div className="crop">
        <h1 ref={title} style={{ fontSize: 46, lineHeight: '44px', marginTop: 70 }}>
          Entrega
        </h1>
      </div>

      <FraseThird ref={frase}>
        O gelo acabou? nós entregamos!
      </FraseThird>

      <Elements>
        <img
          ref={truck}
          src={truckLine}
          alt="Truck Express"
          className="element truck"
          style={{
            left: 'auto',
            right: '-3em',
            top: '9em',
          }}
        />
      </Elements>
    </Container>
  );
}
