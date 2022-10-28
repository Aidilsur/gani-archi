import React from 'react';

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function Button({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-primary px-3 xl:px-7 py-1 xl:py-3 outline mt-10 rounded-md font-semibold xl:font-bold text-xs lg:text-xl">
      {title}
    </button>
  );
}

export default Button;
