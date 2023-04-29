// eslint-disable-next-line quotes
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="grid content-center h-screen border">
    <div className="flex justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold leading-relaxed">
          Nextjs ＋ Tailwind ＋ TypeScript ⚡️
        </h1>
        <a
          href="https://github.com/aftabrehan/vpn-vault"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Repo
        </a>
      </div>
    </div>
  </div>
);

export default Home;
