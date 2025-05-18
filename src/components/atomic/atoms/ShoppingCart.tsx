import Link from 'next/link';
import {IoCartOutline } from 'react-icons/io5';

const ShoppingCart = () => {
  return (
    <Link
      href={'/Cart'}
      >
      <IoCartOutline className='text-2xl'/>
    </Link>
  )
}

export default ShoppingCart