import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <ul className='flex font-bold text-right text-white'>
      <li className='hover:font-extrabold hover:text-blue-500'>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li className='ml-3 hover:font-extrabold  hover:text-blue-500'>
        Quem somos
      </li>
      <li className='ml-3 hover:font-extrabold hover:text-blue-500'>
        <a>Portfólio</a>
      </li>
      <li className='ml-3 hover:font-extrabold hover:text-blue-500'>
        <a>Contato</a>
      </li>
      <li className='ml-3 hover:font-extrabold hover:text-blue-500'>
        <Link href='https://webmail.kfilmes.digital'>
          <a>Webmail</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
