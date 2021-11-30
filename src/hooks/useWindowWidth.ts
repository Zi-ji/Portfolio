import React, { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (window) {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, []);

  return { windowWidth };
}
