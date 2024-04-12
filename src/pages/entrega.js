import React from 'react';
import { Container } from 'react-bootstrap';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import truckExpress from '~/assets/img/diretorio_otimizado/entrega_express_line.svg';

import { Content } from '~/styles/styles-delivery';

export default function Delivery() {
  return (
    <Container fluid="sm">
      <Content>
        <header>
          <h1>Entrega</h1>
          <img src={truckExpress} alt="Caminhão de entrega expressa" />
        </header>

        <Frase className="frase">Não se preocupe, entregamos para você!</Frase>

        <p>
          Oferecemos opções de entrega imediata ou agendada, com atendimento rápido para garantir o sucesso do seu evento!
        </p>

        <small>* Sujeito à disponibilidade</small>

        <p>
          Todas as nossas entregas são rastreáveis. Você receberá informações detalhadas do trajeto final por SMS ou WhatsApp.
          <br /> Fique mais conectado conosco!
        </p>

        <div className="action">
          <Button color="orange" href="https://api.whatsapp.com/send?phone=5511945592940">Peça já</Button>
        </div>
      </Content>
    </Container>
  );
}
