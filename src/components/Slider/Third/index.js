import React from 'react';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import ice from '~/assets/img/slider/diretorio_otimizado/ice.svg';

import { ImageSlide, Social,  Content } from './styles';
import Row from 'react-bootstrap/Row';
export default function Third() {
  const { height } = useWindowDimensions();

  return (
    <Row>
      <ImageSlide height={height}>
        <Social>
          <a href="https://www.instagram.com/snowgo.gelodelivery/" target="blank">
            <FaInstagram size="2.5em" className="icon" />
          </a>

          <a href="https://www.facebook.com/snowgo.gelodelivery/" target="blank">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>

      </ImageSlide>

      <Content>
        <h1>Festa com cerveja trincando!</h1>

        <img src={ice} alt="Neve"  width="640" height="360" className="neve" />
      </Content>
    </Row>
  );
}
