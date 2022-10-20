import type { NextPage } from 'next';
import Image from 'next/image';
import { Hero } from '../components';
import Layout from '../Layout';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
    </>
  );
};

export default Home;
