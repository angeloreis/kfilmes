import React from 'react';
import Layout from '../src/components/Layout';

import '../styles/globals.css';

const myApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default myApp;
