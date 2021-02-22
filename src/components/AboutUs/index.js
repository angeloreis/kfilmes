import React from 'react';

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-1 bg-gray-100 rounded overflow-hidden'>
        <div className='w-24 h-full bg-red-500'></div>
      </div>
      <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
        <h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
          Quem somos
        </h1>

        <div
          className='pb-8 flex items-center justify-center w-screen h-2/4'
          style={{ paddingTop: '35px', marginBottom: '-60px' }}
        >
          <div className='bg-white border shadow-sm px-4 py-3 rounded-lg w-10/12'>
            <div className='flex items-center'>
              <img
                className='bg-blue-600 h-12 w-12 rounded-full'
                src='/images/logo.png'
              />
              <div className='ml-2'>
                <div className='text-sm '>
                  <span className='font-semibold'>K Filmes</span>
                  <span className='text-gray-500'> • 1st</span>
                </div>
                <div className='text-gray-500 text-xs '>
                  A K Filmes é mais que uma produtora, somos criatividade,
                  agilidade, inovação e emoção.
                </div>
                <div className='text-gray-500 text-xs flex'>
                  <span className='inline-block'>
                    1 ano • Viemos para ficar! •{' '}
                  </span>
                  <svg
                    className='inline-block ml-1 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-supported-dps='16x16'
                    fill='currentColor'
                    className='mercado-match'
                    width='16'
                    height='16'
                    focusable='false'
                  >
                    <path d='M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z' />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className='text-gray-800 mt-2 leading-normal md:leading-relaxed'>
              Quem somos
            </h2>
            <p className='text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed'>
              <br />A KPRODUTORA é uma empresa que pensa além de um simples
              vídeo. Trazemos agilidade e qualidade para você se conectar melhor
              com seu público. Com uma equipe especializada, Trabalhamos com
              produção de vídeos institucionais, promocionais, perfis políticos,
              eventos, documentários, comerciais, programas de TV (abertura e/ou
              corporativa) e para mídias digitais (websites e redes sociais).
              Com profissionalismo e dedicação, levamos ao mercado produções
              diferenciadas e com os melhores equipamentos do mercado. Atuamos
              em todas as etapas da produção de um vídeo. Captação, edição e
              finalização em diversos formatos. Estamos no mercado para fazer o
              diferencial, com responsabilidade e inovação. Venha nos conhecer
              !!!
            </p>
            <div className='text-gray-500 text-xs flex items-center mt-3'>
              <img
                className='mr-0.5'
                src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb'
              />
              <img
                className='mr-0.5'
                src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'
              />
              <img
                className='mr-0.5'
                src='https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97'
              />
              <span className='ml-1'>47 • 26 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
