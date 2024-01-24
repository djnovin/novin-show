import React, { ComponentProps } from 'react';

export const Footer = (props: ComponentProps<'footer'>) => {
  const { ...rest } = props;
  return (
    <footer
      className='bg-gray-200'
      {...rest}
    >
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 lg:container mx-auto'>
        <div className='col-span-1 text-normal flex flex-col gap-2'>
          <h3 className='font-semibold text-gray-900'>Customer Service</h3>
          <ul className='text-gray-800 list-none flex flex-col gap-1 font-light'>
            <li className=' hover:decoration-underline'>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='border-gray-50' />
      <div className='p-4 flex flex-col gap-4 lg:container mx-auto'>
        <div className='text-gray-800'>
          <ul className='list-none flex flex-row gap-2'>
            <li className=' hover:decoration-underline'>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li className=' hover:decoration-underline'>
              <a href='/terms'>Terms</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <p>
            'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK
            Limited and are registered in numerous jurisdictions around the
            world.
          </p>
          <p>&copy; Copyright 2024 FARFETCH UK Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
