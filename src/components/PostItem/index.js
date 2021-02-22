import React from 'react';

const PostItem = ({ url_post, imagem_post, description_post }) => (
  <div className='p-4 md:w-1/3 sm:mb-0 mb-6 border-0 border-red-900'>
    <div className='rounded-lg h-64 overflow-hidden'>
      <img
        alt='content'
        className='object-cover object-center h-full w-full'
        src={imagem_post}
      />
    </div>
    <p className='text-base leading-relaxed mt-2'>{description_post}</p>
    <a
      className='text-red-500 inline-flex items-center mt-3'
      target='_blank'
      href={url_post}
    >
      Ver no Insta
      <svg
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='w-4 h-4 ml-2'
        viewBox='0 0 24 24'
      >
        <path d='M5 12h14M12 5l7 7-7 7'></path>
      </svg>
    </a>
  </div>
);

export default PostItem;
