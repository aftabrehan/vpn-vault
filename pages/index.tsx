import type { NextPage } from 'next';

import Layout from '../layout';
import Hero from '../components/hero';
import Feature from '../components/feature';

const Home: NextPage = () => (
  <Layout>
    <Hero />
    <Feature />
  </Layout>
);

export default Home;
