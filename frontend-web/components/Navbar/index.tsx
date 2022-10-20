import Link from 'next/link';
import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

type Props = { onClick: (event: React.MouseEvent<HTMLElement>) => void };

function Navbar({ onClick }: Props) {
  return (
    <header>
      <nav className="text-justify flex justify-between items-center py-4 mx-auto max-w-[1336px]">
        <Link href="/">
          <span className="text-xl font-bold">Gani</span>
        </Link>
        <button onClick={onClick}>
          <RiMenu3Fill className="text-xl" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
