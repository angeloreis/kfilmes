import React from 'react';

const PlaceOnMap = () => {
  return (
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
        marginTop: '-35px',
        marginBottom: '35px'
      }}
      allowFullScreen=''
      aria-hidden='false'
      tabIndex='0'
    />
  );
};

export default PlaceOnMap;
