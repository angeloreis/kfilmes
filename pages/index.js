import React from 'react';
import Portfolio from '../src/components/PortFolio';
import AboutUs from '../src/components/AboutUs';
import PlaceOnMap from '../src/components/PlaceOnMap';

const Home = () => {
  return (
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
        </div>
      </div>
      <PlaceOnMap />
    </div>
  );
};

export default Home;
