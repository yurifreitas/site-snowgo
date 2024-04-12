// Importações necessárias
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MobileLayout from '~/pages/_layouts/mobile';
import DesktopLayout from '~/pages/_layouts/desktop';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import GlobalStyles from '~/styles/global';

// Registro do plugin GSAP necessário para animações
gsap.registerPlugin(CSSPlugin);

// Componente de layout que determina qual layout usar baseado na largura da tela
const Layout = ({ children }) => {
  const { width } = useWindowDimensions();
  const mobileMaxSize = 825;
  const IsMobile = width <= mobileMaxSize;

  // Seleciona qual layout usar baseado se é mobile ou não
  const SelectedLayout = IsMobile ? MobileLayout : DesktopLayout;

  return (
    <>
      <GlobalStyles />
      <SelectedLayout>{children}</SelectedLayout>
    </>
  );
};

export default Layout;
