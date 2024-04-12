import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Bucket from '../Bucket';
import Button from '~/styles/components/Button';

import Home from './Icons/Home';
import Product from './Icons/Product';
import Express from './Icons/Express';
import Contact from './Icons/Contact';

import { MenuContainer, Item, Modal } from './styles';

export default function Menu() {
  const [modal, setModal] = useState(false);
  const { width, height } = useWindowDimensions();

  function handleToggleModal(event) {
    event.preventDefault();
    setModal(!modal);
  }

  return (
    <>
      {modal && (
        <Modal height={height} width={width}>
          <div className="close">
            <MdClose onClick={handleToggleModal} color="#fff" size="1.5em" />
          </div>

          <section>
            <h1>Como quer prosseguir?</h1>
            <Button color="orange" href="https://api.whatsapp.com/send?phone=5511945592940">
              <FiShoppingCart color="#fff" size="1.7em" />
              Não tenho tempo, quero pedir já
            </Button>
            <Button
              color="orange"
              href="https://api.whatsapp.com/send?phone=5511945592940"
            >
              <FaWhatsapp color="#fff" size="1.7em" />
              Ainda tenho dúvidas, quero falar no Whatsapp
            </Button>

            <div className="label">
              <h1>FALTA POUCO</h1>
            </div>
          </section>
        </Modal>
      )}

      <MenuContainer width={width}>
        <Item activeClassName="active" exact="true" to="/">
          <Home />
          Inicio
        </Item>
        <Item activeClassName="active" to="/entrega">
          <Express />
          Entrega
        </Item>

        <Bucket
          onClick={handleToggleModal}
          style={{ margin: '-0.6em 0 0 0' }}
          size="small"
          align="top"
        >
          Peça Agora
        </Bucket>

        <Item activeClassName="active" to="/produtos">
          <Product />
          Produtos
        </Item>
        <Item activeClassName="active" to="/contato">
          <Contact />
          Contato
        </Item>
      </MenuContainer>
    </>
  );
}
