import { createGlobalStyle } from 'styled-components';
import { fontFace } from 'polished';
import variables from './variables';

export default createGlobalStyle`
@font-face {
  font-family: Helvetica;
  src:  
  url('/fonts/Helvetica.woff') format('woff'),
  url('/fonts/Helvetica.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root, .app { 
  min-height: 100%;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
}

body {
  min-height: 100%;
  background: ${variables.colors.lightWhite};
  -webkit-font-smoothing: antialiased !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${variables.fonts.title};
  margin: 0;
  padding: 0;
}

p {
  font-family: ${variables.fonts.paragraph};
  margin: 0;
  padding: 0;
}

body, input, button {
  color: ${variables.colors.primary};
  font-size: 14px;
}

a {
  text-decoration: none;
}

*:hover {
  text-decoration: none;
}

*:focus {
  outline: none;
  border: 0;
  box-shadow: none;
}

ul, ol {
  margin: 0;
}

button {
  cursor: pointer;
}

.container-fluid {
  padding: 0;
}

.crop {
  overflow: hidden;
}

.carousel-inner, .carousel-item {
  height: 100%;
  overflow: initial;
}

.carousel-indicators {
  bottom: 5em;
  justify-content: flex-end;
}

.footer-btn-whatsapp {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 9999999;
}

.footer-btn-whatsapp img {
  max-width: 65px;
}

.home-container {
  margin:0px;
  padding: 0px; /* Adiciona padding interno */
}
`;
