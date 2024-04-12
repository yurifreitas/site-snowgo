import React from 'react';
import { Container } from 'react-bootstrap';

import cubes from '~/assets/img/carousel/diretorio_otimizado/cubes_danger.svg';
import cubeOrange from '~/assets/img/carousel/diretorio_otimizado/cube_orange.svg';
import dangerOrange from '~/assets/img/carousel/diretorio_otimizado/danger_orange.svg';

import Frase from '~/styles/components/Frase';

import { Background } from './styles';
import { Wrapper } from '../styles';

export default function Second() {
  return (
    <Wrapper>
      <Container>
        <h1>Festa com cerveja trincando!</h1>

        <Frase>Não trabalhamos com gelo seco</Frase>
      </Container>

      <Background>
        <img src={dangerOrange} alt="Sinal de perigo laranja" className="danger orange" />
        <img src={cubeOrange} alt="Cubo de gelo laranja" className="cube orange" />
        <img src={cubes} alt="Vários cubos de gelo" className="cubes" />
      </Background>
    </Wrapper>
  );
}
