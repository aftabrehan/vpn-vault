// eslint-disable-next-line quotes
import type { NextPage } from 'next';

import Button from '../components/button';

const Home: NextPage = () => (
  <div className="grid content-center h-screen border">
    <div className="flex justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold leading-relaxed">
          Nextjs ＋ Tailwind ＋ TypeScript ⚡️
        </h1>

        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
      </div>
    </div>
  </div>
);

export default Home;
