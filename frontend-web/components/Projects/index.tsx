import React, { useState } from 'react';
import ProjectItem from '../ProjectItem';

type Props = {};

function Projects({}: Props) {
  const [active, setActive] = useState({
    futuristic: true || null,
    japanese: false || null,
    tropical: false || null,
    tropical_modern: false || null,
  });
  // const [isUpdate, setIsUpdate] = useState({ id: null || 0, status: false });
  const items = [
    {
      id: 1,
      image: 'futuristic.jpg',
      text: 'futuristic',
    },
    {
      id: 2,
      image: 'japanese.jpg',
      text: 'japanese',
    },
    {
      id: 3,
      image: 'tropical.jpg',
      text: 'tropical',
    },
    {
      id: 4,
      image: 'tropicalModern.jpg',
      text: 'tropical Modern',
    },
  ];

  const handleOpen = (label: string) => {
    setActive((prev) => ({ ...prev, [label]: !prev?.[label] }));
  };

  return (
    <div className="w-full mx-auto h-screen">
      <h3 className="text-lg font-semibold tracking-[10px] uppercase">
        Projects
      </h3>
      <div className="flex gap-8 relative">
        {items.map((item, index) => {
          const text = item.text.replace(' ', '_').toLowerCase();
          return (
            <>
              <ProjectItem
                key={index}
                item={item}
                // active={active?.[text]}
                handleOpen={() => handleOpen(text)}
                active={active?.[text]}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
