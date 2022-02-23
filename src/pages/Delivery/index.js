import React from 'react';
import { Container } from 'react-bootstrap';

import HomeIcon from '~/components/Menu/Icons/Home';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import truckExpress from '~/assets/img/entrega_express_line.svg';
import loggi from '~/assets/img/loggi.svg';

import { Content, Vantagens } from './styles';

export default function Delivery() {
  return (
    <Container fluid="sm">
      <Content>
        <header>
          <h1>entrega</h1>
          <img src={truckExpress} alt="entrega" />
        </header>

        <Frase className="frase">não esquenta nós entregamos para você!</Frase>

        <p>
          Temos entregas imediatas e agendada, atendimento rápido para você salvar seu evento!!!
        </p>

        <small>* Sujeito a Disponibilidade</small>


        <p>
          Todas as entregas são rastreáveis e você recebe last mile por SMS ou Whatsapp.
          <br /> Você mais conectado com a gente!!!
        </p>

        <div className="action">
          <Button color="orange">Peça já</Button>
        </div>
      </Content>
    </Container>
  );
}
