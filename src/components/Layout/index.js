import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className='container w-full h-full px-5 py-4 mx-auto'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
