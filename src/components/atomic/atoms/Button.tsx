import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='rounded-full bg-white text-black hover:bg-amber-400 px-5 py-2 mx-1 font-poppins font-medium text-sm text-center cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-amber-400 active:bg-amber-500'
    >
      {name}
    </button>
  );
};

export default Button;
