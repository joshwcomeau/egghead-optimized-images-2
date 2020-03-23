import React from 'react';

import catSrc from './assets/cat.webp';
import catFallbackSrc from './assets/cat.jpg';

import ImgWithFallback from './components/ImgWithFallback';

function App() {
  return (
    <ImgWithFallback
      src={catSrc}
      fallbackSrc={catFallbackSrc}
      alt="Cat playing with toy"
    />
  );
}

export default App;
