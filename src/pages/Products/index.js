import React from 'react';
import { Container } from 'react-bootstrap';

import HomeIcon from '~/components/Menu/Icons/Home';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import IceCube from '~/assets/img/carousel/cube_orange.svg';
import loggi from '~/assets/img/loggi.svg';

import { Content, Vantagens, Image } from './styles';

export default function Products() {
    return (
        <Container fluid="sm">
            <Content>
                <header>
                    <h1>Produtos</h1>
                    <Image>
                    <img src={IceCube} alt="Cubo de Gelo" />
                    </Image>
                </header>
                <p clssName="loggi-text">
                    <ul>
                        <li>
                            Gelo em Cubo 1 kg
                        </li>
                        <li>
                            Gelo em Cubo 3 kg
                        </li>
                        <li>
                            Gelo em Cubo 5 kg
                        </li>
                        <li>
                            Gelo Triturado 10 kg
                        </li>
                        <li>
                            Gelo Especial Drinks  Consultar
                        </li>
                        <li>
                            Gelo Sabores  Consultar
                        </li>
                    </ul>
                </p>


            </Content>
        </Container>
    );
}
