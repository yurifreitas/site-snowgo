import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import phone from '~/assets/img/diretorio_otimizado/phone_line.svg';
import photo from '~/assets/img/pessoas_festa_gelo.png';

import Frase from '~/styles/components/Frase';

import { ContainerContact } from '~/styles/styles-contact';

export default function Contact() {
  const { width } = useWindowDimensions();

  // Componente para informações de contato reutilizáveis
  const ContactInfo = () => (
    <>
      <li><span>Telefones</span></li>
      <li>
        <FaWhatsapp color="#27BDBE" size={16} />
        <a href="https://api.whatsapp.com/send?phone=5511945592940" target="_blank" rel="noopener noreferrer">
          <small>(11)</small> 94559-2940
        </a>
      </li>
    </>
  );

  // Estrutura da seção da loja
  const StoreDetails = () => (
    <div className="loja">
      <ul>
        <li><span>Loja Pinheiros</span></li>
        <li><p>Rua Ferreira de Araújo, 877 <small>- Pinheiros</small></p></li>
      </ul>
      <ul>
        <li><span>Horário de Funcionamento</span></li>
        <li><p>Segunda-feira: <small>09h às 16h</small></p></li>
        <li><p>Terça-feira: <small>09h às 16h</small></p></li>
        <li><p>Quarta-feira: <small>08h às 18h</small></p></li>
        <li><p>Quinta-feira: <small>08h às 20h</small></p></li>
        <li><p>Sexta-feira: <small>08h às 20h</small></p></li>
        <li><p>Sábado: <small>08h às 20h</small></p></li>
        <li><p>Domingo: <small>09h às 14h</small></p></li>
      </ul>
    </div>
  );

  return (
    <ContainerContact fluid={width > 825}>
      {width < 825 ? (
        <>
          <h1>Contato</h1>
          <img src={phone} alt="Contato" className="phone" />
          <ul><ContactInfo /></ul>
          <StoreDetails />
        </>
      ) : (
        <Row className="desktop">
          <Col><Image src={photo} fluid /></Col>
          <Col className="infos">
            <h1>O único delivery focado em gelo</h1>
            <Frase>Vê se não esquenta!</Frase>
            <ul><ContactInfo /></ul>
          </Col>
        </Row>
      )}
    </ContainerContact>
  );
}
