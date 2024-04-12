import React from 'react';
import Menu from '~/components/Menu';
import useWindowDimensions from '~/hooks/useWindowDimensions'; // Certifique-se de que o caminho para o hook está correto

export default function Mobile({ children }) {
  const { width } = useWindowDimensions();  // Pega apenas a largura da janela do hook
  const child = React.Children.toArray(children)[0];

  // Define um breakpoint para considerar como dispositivo móvel
  const isMobile = width <= 768;

  // Renderiza o Menu condicionalmente se não estivermos mostrando o componente 'Introduction' e for mobile
  const shouldRenderMenu = isMobile && child && child.type.name !== 'Introduction';

  return (
    <>
      {child}
      {shouldRenderMenu && <Menu />}
    </>
  );
}
