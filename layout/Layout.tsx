import Head from 'next/head';

import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => (
  <>
    <Head>
      <title>VPN Vault</title>
    </Head>

    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
