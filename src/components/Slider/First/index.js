import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';
import Button from '~/styles/components/Button';
import ice from '~/assets/img/slider/diretorio_otimizado/ice.svg';
import logo from '~/assets/img/diretorio_otimizado/snowgo_light.svg';
import { ImageSlide, Content, Social } from './styles';
import Row from 'react-bootstrap/Row';

export default function First() {
  const { height, width } = useWindowDimensions();
  const image = useRef(null);
  const logoSnow = useRef(null);
  const button = useRef(null);
  const neveDetail = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
   
  }, []);

  return (
    <Row>
      <ImageSlide ref={image} height={height} width={width}>
        <Social>
          <a href="https://www.instagram.com/snowgo.gelodelivery/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="2.5em" className="icon" />
          </a>
          <a href="https://www.facebook.com/snowgo.gelodelivery/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>
      </ImageSlide>

      <Content>
        <img src={logo} ref={logoSnow}  width="100" alt="SnowGo - Delivery" className="logo" />
        <Button href="/quem-somos" ref={button} color="orange">
          Saiba mais sobre nós
        </Button>
        <img src={ice} ref={neveDetail} alt="Neve" max-width="200" className="neve" />
      </Content>
    </Row>
  );
}
