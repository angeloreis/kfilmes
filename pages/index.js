import React from 'react';
import dynamic from 'next/dynamic';

import Portfolio from '../src/components/PortFolio';
import AboutUs from '../src/components/AboutUs';
import PlaceOnMap from '../src/components/PlaceOnMap';

const Player = dynamic(import('../src/components/VideoMain'), {
  ssr: false,
  loading: () => <p>Carregando vídeo...</p>
});

const Home = () => {
  return (
    <>
      <Player />
      <AboutUs />
      <Portfolio className='container w-full' />
      <PlaceOnMap />
    </>
  );
};

export default Home;
