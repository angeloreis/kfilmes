import React from 'react';

const PlaceOnMap = () => {
  return (
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

        <iframe
          className='w-full border-0'
          width='100%'
          height='450'
          frameBorder='0'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5593596268754!2d-48.46313230254576!3d-1.439390328138767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c13ce73afb1%3A0xaacec257a3dcd7ac!2sTv.%20Vileta%2C%202533%20-%20Marco%2C%20Bel%C3%A9m%20-%20PA%2C%2066093-345!5e0!3m2!1spt-BR!2sbr!4v1613970956445!5m2!1spt-BR!2sbr'
          style={{
            border: '0',
            textAlign: 'center',
            borderRadius: '30px',
            marginTop: '15px',
            marginBottom: '35px'
          }}
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
        />
      </div>
    </div>
  );
};

export default PlaceOnMap;
