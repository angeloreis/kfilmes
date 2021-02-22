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
    <div>
      <Player />
      <div className='container px-5 py-4 mx-auto'>
        <div className='flex flex-col'>
          <div className='h-1 bg-gray-100 rounded overflow-hidden'>
            <div className='w-24 h-full bg-red-500'></div>
          </div>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
              Quem somos
            </h1>
          </div>
        </div>
        <AboutUs />
        <Portfolio className='container w-full' />
        <div className='flex flex-col'>
          <div className='h-1 bg-gray-100 rounded overflow-hidden'>
            <div className='w-24 h-full bg-red-500'></div>
          </div>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
              Localização
            </h1>
            <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
              Venha tomar um café conosco.
              <br />A porta está sempre aberta!
            </p>
          </div>
        </div>
        <PlaceOnMap />
      </div>
    </div>
  );
};

export default Home;
