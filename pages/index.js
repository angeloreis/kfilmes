import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Portfolio from '../src/components/PortFolio';
const serverInstagram = axios.create({
  baseURL: 'https://instagram.com'
});

const fetcher = (url) =>
  serverInstagram
    .get(url)
    .then((response) => response.data)
    .catch((error) => error);

const Home = () => {
  const { data } = useSWR('/kfilmesofc/?__a=1', fetcher);

  console.log(data);

  return (
    <div className='container bg-gray-50 w-full'>
      <Portfolio data />
    </div>
  );
};

export default Home;
