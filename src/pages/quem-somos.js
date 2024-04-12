import React from 'react';

import mission from '~/assets/img/diretorio_otimizado/mission.svg';
import vision from '~/assets/img/diretorio_otimizado/vision.svg';
import values from '~/assets/img/diretorio_otimizado/values.svg';

import { AboutContainer } from '~/styles/styles-about';

export default function About() {
  return (
    <AboutContainer fluid="sm">
      <h1>Quem Somos</h1>
      <p>
        Nascemos através da experiência do fundador no mercado "gelado", abrangendo desde o processo de produção até a entrega do produto final. Com expertise adquirida na administração de fábrica, distribuidora e loja, identificamos a lacuna no mercado delivery para venda de gelo.
      </p>
      <p>
        A SnowGO nasceu com um DNA inovador, visando facilitar, modernizar e agilizar a compra de gelo para eventos corporativos, aniversários, comemorações, churrascos ou mesmo para aquele almoço em família, tudo isso por meio dos melhores canais de comunicação.
      </p>
      <br />
      <p>
        Nosso compromisso é com entregas eficazes e pontuais para que seu evento prospere com bebidas na temperatura ideal. Para nós, garantir a felicidade e o frescor das bebidas é essencial.
      </p>

      <Section title="Nossa Missão" image={mission}>
        <ul>
          <li><strong>Pronto Atendimento:</strong> Atendimento ágil para atender suas necessidades.</li>
          <li><strong>Gelo de Qualidade:</strong> Garantia de gelo de alta qualidade para suas bebidas.</li>
          <li><strong>Eficiência na Entrega:</strong> Entregas rápidas e confiáveis para seu evento.</li>
          <li><strong>Bebidas Geladinhas:</strong> Nosso foco é manter suas bebidas na temperatura ideal.</li>
        </ul>
      </Section>

      <Section title="Nossa Visão" image={vision}>
        Aspiramos a uma atuação ampla e adaptada em diversas áreas:
        <br />
        <strong>Pessoas:</strong> Ser um ambiente de trabalho inspirador e motivador.
        <br />
        <strong>Gelos:</strong> Oferecer uma variedade de produtos que satisfaçam e antecipem desejos dos consumidores.
        <br />
        <strong>Parceiros:</strong> Cultivar uma rede colaborativa de valor mútuo.
        <br />
        <strong>Planeta:</strong> Comprometer-se com a sustentabilidade e apoio às comunidades.
        <br />
        <strong>Produtividade:</strong> Buscar a eficácia e dinamismo organizacional.
        <br />
        <strong>Propósito:</strong> Facilitar e agilizar a experiência de compra para os clientes.
      </Section>

      <Section title="Nossos Valores" image={values}>
        Nossos valores norteiam nossas ações e comportamento:
        <br />
        <strong>Liderança:</strong> Moldar um futuro promissor.
        <br />
        <strong>Colaboração:</strong> Valorizar o talento coletivo.
        <br />
        <strong>Integridade:</strong> Agir com transparência.
        <br />
        <strong>Responsabilidade:</strong> Assumir nossos compromissos.
        <br />
        <strong>Paixão:</strong> Comprometimento total com nosso trabalho.
        <br />
        <strong>Qualidade:</strong> Busca constante pela excelência.
      </Section>
    </AboutContainer>
  );
}

function Section({ title, image, children }) {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '100px', marginRight: '20px' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <p>{children}</p>
      </div>
    </div>
  );
}