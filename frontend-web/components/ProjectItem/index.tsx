/* eslint-disable react-hooks/rules-of-hooks */
import Button from '../Button';
import { motion } from 'framer-motion';
import { useIsTablet, useIsMobile } from '../../utils';

type Props = {
  item: { image: string; text: string; id: number };
  active: boolean;
  handleOpen: (event: React.MouseEvent<HTMLElement>, params: any) => void;
};

function ProjectItem({ active, handleOpen, item }: Props) {
  const isTablet = useIsTablet();

  const wrapper = {
    animate: isTablet ? { width: active ? '40%' : '20%' } : { width: '100%' },
    transition: { transition: 1.5 },
  };

  const image = {
    animate: isTablet
      ? { height: '70vh' }
      : { height: active ? '30vh' : '10vh' },
    transition: { transition: 1.5 },
  };

  const openDetail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <motion.div
      onClick={handleOpen}
      // animate={{ width: active === true ? '50%' : '20%' }}
      // transition={{ transition: 1.5 }}
      variants={wrapper}
      initial="initial"
      animate="animate"
      className="cursor-pointer">
      <motion.div
        variants={image}
        initial="initial"
        animate="animate"
        className="relative w-[100%] bg-cover bg-center bg-no-repeat overflow-hidden p-3 xl:p-10"
        style={{ backgroundImage: `url(/images/${item.image}` }}>
        <h2 className="text-light text-md md:text-2xl font-bold uppercase">
          {item.text}
        </h2>
        <motion.div
          animate={{ opacity: active ? 1 : 0 }}
          className="absolute bottom-5 right-5 xl:bottom-10 xl:right-10">
          <Button title="See More" onClick={openDetail} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectItem;
