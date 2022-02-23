import React from 'react';

import Menu from '~/components/Menu';
import Bar from '~/components/Bar';

import { Container } from './styles';

export default function Mobile({ children }) {
  return (
    <Container>
      

      {children}

      {children.type.name === 'Introduction' ? null : <Menu />}
    </Container>
  );
}
