import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import truckLine from '~/assets/img/entrega_express_line.svg';
import truckSchedule from '~/assets/img/slider/entrega_programada.svg';
import truckExpress from '~/assets/img/slider/entrega_express.svg';

import {
  Container,
  Elements,
  DeliveryContainer,
  DeliveryType,
  Vantagens,
  FraseThird,
} from './styles';

export default function Third() {
  let title = useRef(null);
  let truck = useRef(null);
  let deliveryTypes = useRef(null);
  let frase = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(
      [title, truck],
      1,
      {
        y: '-10',
        opacity: 0,
        ease: Power3.easeOut,
      },
      0.4
    )
      .to(truck, 0.1, { scaleX: -1 }, 0.3)
      .from(deliveryTypes, 1, { y: '-20', opacity: 0, ease: Power3.easeOut }, 1)
      .from(frase, 1, { y: '50', opacity: 0, ease: Power3.easeOut }, 2);
  }, [tl]);

  return (
    <Container>
      <div className="crop">
        <h1
          ref={el => (title = el)}
          style={{ fontSize: 46, lineHeight: '44px', marginTop: 70 }}
        >
           entrega
        </h1>
      </div>


      <FraseThird ref={el => (frase = el)}>
        o gelo acabou? nós entregamos!
      </FraseThird>

      <Elements>
        <img
          ref={el => (truck = el)}
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
