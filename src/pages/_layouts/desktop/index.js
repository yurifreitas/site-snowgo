import React from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export default function Desktop({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
