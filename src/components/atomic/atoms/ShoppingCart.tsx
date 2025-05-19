import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

const ShoppingCart = () => {
  return (
    <Link href={'/Cart'}>
      <IoCartOutline className='text-3xl text-white' />
    </Link>
  );
};

export default ShoppingCart;
