import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import Bucket from '~/components/Bucket';
import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import { CallContainer, DeliveryTypes, GeloContainer } from './styles';

import callImage from '~/assets/img/pessoas_festa_gelo.png';
import geloImage from '~/assets/img/cerveja_gelo.jpg';
import ice from '~/assets/img/slider/diretorio_otimizado/ice.svg';
import enao from '~/assets/img/diretorio_otimizado/enao.svg';
import expressIcon from '~/assets/img/diretorio_otimizado/entrega_express_line.svg';
import scheduleIcon from '~/assets/img/diretorio_otimizado/entrega_programada_line.svg'; // Importação não utilizada

export default function Sections() {
  return (
    <>
      <CallContainer fluid>
        <Row>
          <Col md={6}>
            <Image src={callImage} alt="Pessoas na festa com gelo" fluid />
            <Bucket
              className="bucket"
              link="https://api.whatsapp.com/send?phone=5511945592940"
              target="_blank" // Corrigido para _blank
            >
              Peça Agora
            </Bucket>
          </Col>
          <Col>
            <div className="content">
              <h2>Se acabar o gelo, a festa já era?</h2>
              <Image fluid src={enao} alt="É não" />
            </div>
          </Col>
          <Col md={2}>
            <Image src={ice} alt="Neve" className="neve" />
          </Col>
        </Row>
      </CallContainer>

      <DeliveryTypes fluid>
        <Row>
          <Col className="title">
            <Button>Entrega</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="type">
              <Image src={expressIcon} alt="Entrega Express" />
              <div className="content">
                <h2>Entrega</h2>
                <Frase className="frase">
                  Não se preocupe, nós entregamos para você!
                </Frase>
                <p>
                  Temos entregas imediatas*, você pode contar com atendimento rápido para salvar o seu evento.
                </p>
                <p>
                  Planeje seu evento com os amigos e não esqueça da cerveja geladinha, garanta sua festa perfeita.
                </p>
                <Button href="/entrega" color="purple">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </DeliveryTypes>

      <GeloContainer fluid>
        <Row>
          <Col md={6}>
            <div className="content">
              <h3>Festa com cerveja trincando!</h3>
            </div>
          </Col>
          <Col md={6}>
            <Image src={geloImage} alt="Cerveja com gelo" fluid />
          </Col>
        </Row>
      </GeloContainer>
    </>
  );
}
