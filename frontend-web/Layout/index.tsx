import React, { useState } from 'react';
import { Footer, Menu, Navbar } from '../components';

type Props = { children: JSX.Element };

function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar onClick={handleMenu} />
      <Menu isOpen={isOpen} onClick={handleMenu} />
      <main className="max-w-[1336px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
