import type { NextPage } from 'next';

import Layout from '../layout';
import Hero from '../components/hero';
import Feature from '../components/feature';
import Pricing from '../components/pricing';

const Home: NextPage = () => (
  <Layout>
    <Hero />
    <Feature />
    <Pricing />
  </Layout>
);

export default Home;
