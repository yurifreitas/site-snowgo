import React from 'react';
import { Container } from 'react-bootstrap';

import HomeIcon from '~/components/Menu/Icons/Home';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import truckExpress from '~/assets/img/diretorio_otimizado/entrega_express_line.svg';
import loggi from '~/assets/img/diretorio_otimizado/loggi.svg';

import { Content, Vantagens } from '~/styles/styles-express';

export default function Express() {
  return (
    <Container fluid="sm">
      <Content>
        <header>
          <h1>Entregas</h1>
          <img src={truckExpress} alt="entrega express" />
        </header>

        <Frase className="frase">Não esquenta nós entregamos para você!</Frase>

        <p>
          Temos entregas imediatas*, você pode contar com atendimento rápido
          para salvar o seu evento.
        </p>

        <small>* Sujeito a Disponibilidade</small>

        <Vantagens>
          <div className="vantagem">
            <img src={loggi} alt="Parceria com a Loggi" />
            <p>Parceria com a Loggi</p>
          </div>

          <div className="vantagem">
            <HomeIcon color="#505050" />
            <p>Entrega Imediata</p>
          </div>
        </Vantagens>

        <p className="loggi-text">
          As entregas emergenciais são na maioria dos casos, realizadas pela
          parceira Loggi (entregas por motoboy), a qual você consegue acompanhar
          o trajeto em tempo real e fazer o pagamento em máquina de cartão na
          entrega do produto. <br /> Mas também contamos com frota própria, para
          garantir sua entrega.
        </p>

        <div className="action">
          <Button color="orange">Gelo 5KG</Button>
        </div>
      </Content>
    </Container>
  );
}
