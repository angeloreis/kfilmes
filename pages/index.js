import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'
import axios from 'axios';

const serverInstagram = axios({
    baseURL: 'https://instagram.com'
});

const fetcher = (url) => serverInstagram.get(url).then(res => res.data);

import Header from "../component/Header";
import Banner from "../component/Banner";

export default function Home() {

  const { data } = useSWR(`/kfilmesofc/?__a=1`,fetcher);

  console.log(data);

  return (
    <div>
      <Head>
        <title>KFilmes Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div id="banner">
            <Banner/>
        </div>

      <footer className={'text-center'}>
          <Link href="#">
              <a target="_blank" rel="noopener noreferrer">
                  Powered by Angelo Reis on GitHub
              </a>
          </Link>
      </footer>
    </div>
  )
}