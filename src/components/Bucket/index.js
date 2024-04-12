import React from 'react';

import { Container, BucketIcon, Label, Text } from './styles';

import bucket from '~/assets/img/diretorio_otimizado/ice-bucket.svg';

export default function Bucket({
  children,
  align,
  link,
  size,
  target = null,
  ...rest
}) {
  return (
    <Container align={align} {...rest} className='px-3'>
      <BucketIcon align={align} size={size} href={link || '#!'} target={target}>
        <img src={bucket} style={{padding:10}} alt="Peça pelo WhatsApp" />
      </BucketIcon>

      {children && (
        <Label align={align}>
          <Text>{children}</Text>
        </Label>
      )}
    </Container>
  );
}
