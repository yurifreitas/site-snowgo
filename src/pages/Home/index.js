import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Slider from '~/components/Slider';
import MCarousel from '~/components/Carousel';
import Sections from '~/components/Sections';

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <>
      {/* Container fluido para ocupar toda a largura da tela */}
      <div className="home-container">
        {/* px-3 é uma classe do Bootstrap para padding horizontal */}
        {width > 825 ? <MCarousel /> : <Slider />}
      </div>

      {width > 825 && <Sections />}
    </>
  );
}
