import Image from 'next/image';
import React from 'react';
import Button from '../Button';

type Props = {};

function Hero({}: Props) {
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('hero button');
  };
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center item-center gap-10">
      <div
        id="left"
        className="flex flex-col justify-center items-center text-center">
        <h1 className="capitalize text-4xl md:text-4">
          we help you build your dream house
        </h1>
        <Button title="Start Now" onClick={handleClick} />
      </div>
      <div
        id="right"
        className="flex flex-col gap-2 items-center justify-center z-0">
        <div className="flex mt-10 md:mt-0 md:justify-center items-center gap-2">
          <Image
            src="/images/hero-int-1.jpg"
            alt="int-1"
            width={280}
            height={170}
            className="rounded-md"
          />
          <Image
            src="/images/hero-int-2.jpg"
            alt="int-2"
            width={280}
            height={170}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            src="/images/hero-eks.jpg"
            alt="eks"
            width={588}
            height={237}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
