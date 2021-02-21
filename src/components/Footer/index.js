import React from 'react';

const currentYear = () => {
  const DateTemp = new Date();
  return DateTemp.getFullYear();
};

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-center content-center bg-gray-600 w-full h-64'>
      <div className='grid grid-cols-3 gap-10 font-extrabold text-white'>
        <div>Feito por @AngeloReis</div>
        <div>Plataforma NextJs</div>
        <div>KFilmes&copy; 2019 - {currentYear()}</div>
      </div>
    </div>
  );
};

export default Footer;
