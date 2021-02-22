import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    url_post: '',
    imagem_post: '',
    description_post: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({
      ...old,
      [name]: value
    }));
  };

  const save = async () => {
    try {
      let imgUrlFull = null;
      try {
        imgUrlFull = await axios.get(form.url_post + '?__a=1');
        if (imgUrlFull.data) {
          imgUrlFull = imgUrlFull.data.graphql.shortcode_media.display_url;
        }
      } catch (error) {
        alert('Ocorreu um erro..');
      }

      form['imagem_post'] = imgUrlFull;
      const response = await fetch('/api/createpost', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      await response.json();
      setSuccess(true);
      setForm({
        url_post: '',
        imagem_post: '',
        description_post: ''
      });
    } catch (error) {}
  };

  return (
    <section className='body-font relative'>
      <div className='container px-5 py-4 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font'>
            Cadastrar Novo Post
          </h1>
          {success && <p className='text-sm mt-4'>Post Inserido com Sucesso</p>}
        </div>
        <div className='lg:w-1/2 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-full'>
              <input
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2'
                placeholder='URL da Publicação'
                type='text'
                name='url_post'
                onChange={onChange}
                value={form.url_post}
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2'
                placeholder='Descrição do post'
                type='text'
                name='description_post'
                onChange={onChange}
                value={form.description_post}
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2'
                placeholder='Url da imagem do insta'
                type='text'
                name='imagem_post'
                onChange={onChange}
                value={form.imagem_post}
              />
            </div>
            <div className='p-2 w-full'>
              <button
                className='flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'
                onClick={save}
              >
                Salvar Publicação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
