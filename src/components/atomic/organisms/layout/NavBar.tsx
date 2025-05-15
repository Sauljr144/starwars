'use client'
import links from '@/utils/links';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoCloseOutline, IoCartOutline } from 'react-icons/io5';
import { useState } from 'react';
import logo from '../../../../../public/assets/images/starwars.png'

interface Link{
  name: string,
  href: string
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=' bg-[#0a0a0a] rounded-b-2xl z-10 sticky top-0'>
      <div className='container flex p-4 items-center justify-between mx-auto'>
        <div>
          <Link href={'/'}>
            <Image
              src={logo}
              alt={'Saul Suazo Logo'}
              className='lg:w-20 w-10'
              priority
            />
          </Link>
        </div>
        <div className=' hidden lg:flex items-center '>
          <div className='mr-6'>
            {links.map((link: Link) => (
              <Link
                key={link.name}
                href={link.href}
                className=' mx-5 font-poppins hover:font-medium hover:underline hover:underline-offset-8 '
              >
                {link.name}
              </Link>
            ))}
          </div>
          
        </div>

        <div className='lg:hidden z-10'>
          {/* Menu Button */}
          <button onClick={() => setOpenMenu(true)} className='relative z-20'>
            <IoMenu className='text-3xl' />
          </button>

          {/* Overlay */}
          {openMenu && (
            <div
              onClick={() => setOpenMenu(false)} // Close menu when clicking on the overlay
              className='fixed inset-0  z-10'
            ></div>
          )}

          {/* Mobile Navigation */}
          <div
            onClick={(e) => e.stopPropagation()} 
            className={`fixed right-0 bottom-0 top-0 flex flex-col w-[60%] h-screen bg-black rounded-l-xl z-20 ease-in duration-300 ${
              openMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <div className='mt-5 me-4 flex justify-end'>
              <button onClick={() => setOpenMenu(false)}>
                <IoCloseOutline className='text-3xl' />
              </button>
            </div>

            {/* Navigation Links */}
            <div className='flex flex-col h-3/4 mt-14'>
              <div className='flex flex-col ms-5'>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='mb-4 text-xl font-poppins hover:font-medium hover:underline hover:underline-offset-8'
                    onClick={() => setOpenMenu(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
