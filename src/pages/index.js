// src/pages/index.js
import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Home from './Home';
import Introduction from './introduction';

const IndexPage = () => {
  const [visitor, setVisitor] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getVisitor = sessionStorage.getItem('@SnowGo:Visitor');
    if (!getVisitor || getVisitor === false) {
      sessionStorage.setItem('@SnowGo:Visitor', true);
      setVisitor(true);
    }
  }, []);

  if (width < 575 && visitor) {
    return <Introduction />;
  }
  return <Home />;
};

export default IndexPage;
