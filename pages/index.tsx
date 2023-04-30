import type { NextPage } from 'next';

import Hero from '../components/hero';

const Home: NextPage = () => (
  <div className="grid content-center h-screen border">
    <Hero />
  </div>
);

export default Home;
