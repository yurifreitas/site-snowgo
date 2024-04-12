import React from 'react';
import { Container } from 'react-bootstrap';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import IceCube from '~/assets/img/carousel/diretorio_otimizado/cube_orange.svg';

import { Content, Image } from '~/styles/styles-product';

export default function Products() {
    return (
        <Container fluid="sm">
            <Content>
                <header>
                    <h1>Nossos Produtos</h1>
                    <Image>
                        <img src={IceCube} alt="Cubo de Gelo" />
                    </Image>
                </header>

                <Frase>Qualidade e eficiência para seus eventos e necessidades diárias!</Frase>

                {/* Lista de produtos */}
                <ul>
                    <li>
                        <strong>Gelo em Cubo 5 kg:</strong> Ideal para festas, eventos, e uso diário, nosso gelo em cubo é feito com água purificada e tratada, garantindo qualidade e segurança para você e seus convidados.
                    </li>
                </ul>

                <p>Explorar a nossa gama de produtos é mergulhar em um universo onde a qualidade se encontra com a conveniência. Seja para uma festa grandiosa ou para o seu dia a dia, temos a solução perfeita em forma de gelo.</p>

                <Button color="orange">Conheça mais</Button>
            </Content>
        </Container>
    );
}
