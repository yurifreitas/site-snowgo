import React from 'react';
import { Link } from 'react-router-dom';
import { MdPhoneInTalk } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

import Bucket from '~/components/Bucket';

import snowWhite from '~/assets/img/snowgo_white.svg';

import { FooterContainer, Wrapper, Credits } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <div className="column">

          <ul>
            <li>
              <h3>Redes Sociais</h3>
            </li>
            <li>
              <a
                href="https://www.facebook.com/snowgo.gelodelivery/"
                target="blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/snowgo.gelodelivery/"
                target="blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        

        <div className="column">
          <ul>
            <li>
              <h3>Loja Pinheiros</h3>
            </li>
            <li>
              <p>Rua Ferreira de Araújo, 877 - Pinheiros</p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Horário de Funcionamento</h3>
            </li>
            <li>
              <p>
                Segunda: 09 às 16 <br />
                Terça: 09 às 16 <br />
                Quarta: 08 às 18 <br />
                Quinta: 08 às 20 <br />
                Sexta: 08 às 20 <br />
                Sábado: 08 às 20 <br />
                Domingo: 09 às 14 <br />
              </p>
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li>
              <h3>Telefones</h3>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511945592940">
                <IoLogoWhatsapp color="#27BDBE" size="1.7em" />
                (11) 94559-2940
              </a>
            </li>
            <li>
              <a href="tel:2508-3530">
                <MdPhoneInTalk color="#27BDBE" size="1.7em" />
                (11) 2508-3530
              </a>
            </li>
          </ul>

          <ul>
            <Bucket
              target="_blank"
              link="https://snowgo.menudino.com/"
            />
          </ul>
        </div>
      </FooterContainer>

      <hr />

      <Credits>
        <img src={snowWhite} alt="SnowGo - Gelo Delivery" />

        <p>© 2021 SnowGo, Inc. Todos os direitos reservados.</p>
      </Credits>
    </Wrapper>
  );
}
