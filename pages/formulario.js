import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const checkInsta = axios.create({
  baseURL: 'https://instagram.com/p/'
});

const Formulario = () => {
  const [form, setForm] = useState({
    url_post: '',
    description_post: '',
    image_post: ''
  });

  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const { register, handleSubmit } = useForm();

  const onClickInsta = async (idPost) => {
    const response = await checkInsta.get(`${idPost}/?__a=1`);
    let imageInsta = null;
    if (response.data) {
      console.log(response.data);
      console.log(response.data.graphql.shortcode_media_display_url);
      imageInsta = response.data.graphql.shortcode_media.display_url;
      return imageInsta;
    }
    return null;
  };

  const saveForm = async () => {
    try {
      form['image_post'] = onClickInsta(form.url_post);
      const response = await fetch('/api/portfolio/createpost', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
      console.log(retorno);
    } catch (err) {
      console.log(err.stack);
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    setForm((old) => ({
      ...old,
      [key]: value
    }));
  };

  return (
    <div className='h-full m-11'>
      <form onSubmit={handleSubmit(saveForm)}>
        <div className='border-b-2 block md:flex'>
          <div className='w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md'>
            <div className='rounded  shadow p-6'>
              <div className='pb-6'>
                <label className='font-semibold text-gray-700 block pb-1'>
                  URL do post
                </label>
                <div className='flex'>
                  <input
                    name='url_post'
                    type='text'
                    onChange={onChange}
                    ref={register({ required: true })}
                    value={form.url_post}
                    className='border-1 rounded-r px-4 py-2 w-full'
                  />
                </div>
              </div>
              <div className='pb-4'>
                <label className='font-semibold text-gray-700 block pb-1'>
                  Descrição do post
                </label>
                <input
                  name='description_post'
                  className='border-1 rounded-r px-4 py-2 w-full'
                  type='text'
                  onChange={onChange}
                  ref={register({ required: true })}
                  value={form.description_post}
                />
              </div>
              <div className='pb-4'>
                <label className='font-semibold text-gray-700 block pb-1'>
                  Imagem do Post
                </label>
                <input
                  className='border-1 rounded-r px-4 py-2 w-full'
                  name='image_post'
                  type='text'
                  onChange={onChange}
                  ref={register({ required: false })}
                  value={form.image_post}
                />
              </div>
            </div>
            <button className='w-full bg-blue-400 py-6 my-6 font-bold text-white rounded-lg shadow-lg hover:shadow'>
              Salvar
            </button>
            {success && (
              <div className='-m-2 text-center'>
                <div className='p-2'>
                  <div className='inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm'>
                    <span className='inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center'>
                      Sucesso
                    </span>
                    <span className='inline-flex px-2'>
                      Operação realizada com sucesso!
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
