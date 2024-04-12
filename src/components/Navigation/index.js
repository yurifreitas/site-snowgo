import React, { useState } from 'react';
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import { MenuLinks, Wrapper} from './styles';

import Home from '../Menu/Icons/Home';
import Product from '../Menu/Icons/Product';
import Delivery from '../Menu/Icons/Express';
import Contact from '../Menu/Icons/Contact';
import About from '~/assets/img/menu/about.svg';

import Bucket from '~/components/Bucket';
import logo from '~/assets/img/snowgo_light.svg';

export default function Navigation() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const { width,height } = useWindowDimensions();
  return (
    <>
      <Wrapper>
        <Container>
          <Link to="/">
            <img src={logo} alt="SnowGo - Gelo Delivery" />
          </Link>

          <MenuLinks>
            <Link to="/" className={currentPath === '/' ? 'active' : ''}>
              <Home/>
              Inicio
            </Link>
            <Link to="/entrega" className={currentPath === '/entrega' ? 'active' : ''}>
            <Delivery/>
              Entrega
            </Link>
            <Link to="/produtos" className={currentPath === '/produtos' ? 'active' : ''}>
            <Product/>
              Produtos
            </Link>
            <Link to="/quem-somos" className={currentPath === '/quem-somos' ? 'active' : ''}>
            
              Quem Somos
            </Link>
            <Link to="/contato" className={currentPath === '/contato' ? 'active' : ''}>
           <Contact/>
              Contato
            </Link>
          </MenuLinks>

          <Bucket
            className="bucket"
            target="_blank"
            link="https://api.whatsapp.com/send?phone=5511945592940"
          >
            {width > 1200 ? 'Peça Agora' : null}
          </Bucket>
        </Container>
      </Wrapper>
    </>
  );
}
