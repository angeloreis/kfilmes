import React from 'react';
import Menu from '../Menu';

const Header = () => {
  return (
    <div
      className='flex items-center bg-red-500 w-full'
      style={{ height: '512 px' }}
    >
      <div className='flex justify-start'>
        <img
          src='/images/logo.png'
          width={256}
          alt='K Filmes - Seu sonho é aqui'
        />
      </div>
      <div className='flex justify-end'>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
