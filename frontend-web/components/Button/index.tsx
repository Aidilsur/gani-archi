import React from 'react';

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function Button({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-primary px-7 py-3 outline mt-10 rounded-md font-bold">
      {title}
    </button>
  );
}

export default Button;
