import React, { useState } from 'react';
var { SocialIcon } = require('react-social-icons');
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function Menu({ isOpen, onClick }: Props) {
  const socials = [
    {
      title: 'LinkedIn',
      url: 'https://www.LinkedIn.com/',
    },
    {
      title: 'instagram',
      url: 'https://www.instagram.com/',
    },
    {
      title: 'twitter',
      url: 'https://www.twitter.com/',
    },
    {
      title: 'facebook',
      url: 'https://www.facebook.com/',
    },
  ];
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: isOpen ? 0 : 1000 }}
      transition={{ duration: 1.5 }}
      className="fixed h-screen bg-primary right-0 top-0 w-full md:w-[40%] flex flex-col pl-12 z-20">
      <div className="absolute top-7 right-10">
        <button onClick={onClick}>
          <GrClose />
        </button>
      </div>
      <div className="pt-[40%] lg:flex justify-evenly lg:-ml-24">
        <div>
          <h3 className="text-sm xl:text-xl text-light mb-5">Social</h3>
          <ul className="flex items-center xl:items-start xl:flex-col text-sm gap-2">
            {socials.map((social, index) => (
              <>
                <li
                  key={index}
                  className="xl:flex xl:items-center xl:justify-center">
                  <SocialIcon
                    url={social.url}
                    fgColor="black"
                    bgColor="transparent"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <p className="hidden lg:block lg:font-bold text-dark xl:ml-5 capitalize">
                    {social.title}
                  </p>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="mt-10 lg:mt-0">
          <h3 className="text-sm xl:text-xl text-light mb-5">Menu</h3>
          <ul className="gap-3 flex flex-col font-semibold xl:text-bold xl:text-4xl text-dark xl:gap-6 lg:mt-7">
            <li>Home</li>
            <li>Featured</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-12 mb-5">
        <h3 className="text-sm xl:text-xl text-light">Get in Touch</h3>
        <p className="text-dark">tesemail@gmail.com</p>
      </div>
    </motion.div>
  );
}

export default Menu;
