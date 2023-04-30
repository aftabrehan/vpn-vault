import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
