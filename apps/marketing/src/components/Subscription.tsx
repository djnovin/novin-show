import React, { ComponentProps } from 'react';

export const Subscription = (props: ComponentProps<'div'>) => {
  const { ...rest } = props;
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 lg:container mx-auto'
      {...rest}
    >
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>NEVER MISS A THING</h2>
        <p className='font-light'>
          Sign up for promotions, tailored new arrivals, stock updates and more
          – straight to your inbox
        </p>
      </div>
      <form className='flex flex-col gap-4'>
        <p className='uppercase font-light'>GET UPDATES</p>
        <input
          className='border border-gray-900 rounded-md px-4 py-2 font-light'
          placeholder='Your email address'
          type='text'
        />
        <button
          className='bg-gray-900 text-white px-4 py-2 rounded-md max-w-max self-start hover:bg-gray-700 duration-150 ease-in-out transition-all'
          type='submit'
        >
          Sign Up
        </button>
        <p className='font-light'>
          By signing up, you consent to receiving marketing by email and/or SMS
          and acknowledge you have read our{' '}
          <a
            className='underline'
            href='/'
          >
            Privacy Policy
          </a>
          . Unsubscribe anytime at the bottom of our emails or by replying STOP
          to any of our SMS.
        </p>
      </form>
    </div>
  );
};
