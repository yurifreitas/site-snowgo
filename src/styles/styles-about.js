import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const AboutContainer = styled(Container)`
  text-align: center;
  margin-bottom: 120px;
  margin-top: 50px;

  h1, h2 {
    margin-bottom: 20px;
  }

  p {
    text-align: left;
    line-height: 1.6;
    font-size: 16px;
  }

  img {
    margin-bottom: 20px;
  }
`;
