import type { NextPage } from 'next';
import Image from 'next/image';
import { Hero, Projects } from '../components';
import Layout from '../Layout';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Home;
