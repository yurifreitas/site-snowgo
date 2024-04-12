import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const isClient = typeof window === 'object';

  function getWindowDimensions() {
    if (!isClient) {
      return {
        width: undefined,
        height: undefined,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Removida isClient das dependências

  return windowDimensions;
}
