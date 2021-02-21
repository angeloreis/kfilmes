import React from 'react';
import Head from 'next/head'
import Layout from '../src/components/Layout';

import '../styles/globals.css';

const myApp = ({ Component, pageProps }) => {
  return (
   
    <Layout>
       <Head>
        <link rel='shortcut icon' href='images/favicon.ico' />
       </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default myApp;
