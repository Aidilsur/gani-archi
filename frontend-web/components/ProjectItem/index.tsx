/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

type Props = {
  item: { image: string; text: string; id: number };
  active: boolean;
  handleOpen: (event: React.MouseEvent<HTMLElement>, params: any) => void;
};

function ProjectItem({ active, handleOpen, item }: Props) {
  const openDetail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('open detail');
  };
  return (
    <motion.div
      onClick={handleOpen}
      animate={{ width: active === true ? '40%' : '20%' }}
      transition={{ transition: 1.5 }}
      className="cursor-pointer">
      <div
        className="relative w-[100%] h-[70vh] bg-cover bg-center bg-no-repeat overflow-hidden p-10"
        style={{ backgroundImage: `url(/images/${item.image}` }}>
        <h2 className="text-light text-2xl font-bold uppercase">{item.text}</h2>
        <motion.div
          animate={{ opacity: active ? 1 : 0 }}
          className="absolute bottom-10 right-10">
          <Button title="See More" onClick={openDetail} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
