import React from 'react';

export const Header = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center gap-4 p-2 bg-gray-50 text-sm font-light'>
        <span className=''>
          Incoming | {''}
          <a
            className='underline'
            href='/'
          >
            Shop the latest arrivals
          </a>
        </span>
      </div>
      <header className='grid grid-cols-3 py-4 px-8'>
        <div className='col-span-1'>
          <ul className='flex flex-row gap-4'>
            <li>
              <a href='/'>Women</a>
            </li>
            <li>
              <a href='/about'>Men</a>
            </li>
            <li>
              <a href='/contact'>Kids</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1 flex flex-row justify-center items-center'>
          <a href='/'>
            <img
              className='h-8'
              src='https://www.farfetch.com/styleguide/FARFETCH_Logotype.svg'
              alt='FARFETCH'
            />
          </a>
        </div>
        <div className='col-span-1 flex flex-row justify-end items-center gap-4'>
          <div className='flex flex-row gap-4'>
            <a href='/'> Sign In</a>
            <a href='/'> Register</a>
          </div>
          <div className='flex flex-row gap-4'>
            <a href='/'> Wishlist</a>
            <a href='/'> Shopping Bag</a>
          </div>
        </div>
      </header>
    </>
  );
};
