import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import Button from '~/styles/components/Button';
import Row from 'react-bootstrap/Row';

import ice from '~/assets/img/slider/diretorio_otimizado/ice.svg';
import enao from '~/assets/img/slider/diretorio_otimizado/e_nao.svg';
import logo from '~/assets/img/diretorio_otimizado/snowgo_light.svg';

import { Header, Content, Social } from './styles';

export default function Second() {
  return (
    <Row>
      <Header>
        <img src={logo}  max-width="150"  alt="SnowGo - Delivery" className="logo" />

        <Social>
          <a href="https://www.instagram.com/snowgo.gelodelivery/" target="blank">
            <FaInstagram size="2.5em" className="icon" />
          </a>

          <a href="https://www.facebook.com/snowgo.gelodelivery/" target="blank">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>
      </Header>
      <Content>
        <h1>Se o gelo acabar, a festa já era?</h1>

        <img src={enao} alt="É não"  width="200" className="nao" />

        <Button href="/quem-somos" color="orange">
          Saiba mais sobre nós
        </Button>

        <img src={ice} alt="Neve"   max-width="200" className="neve" />
      </Content>

    </Row>
  );
}
