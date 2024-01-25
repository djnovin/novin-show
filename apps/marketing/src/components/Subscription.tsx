import React, { ComponentProps } from 'react';

interface SubscriptionProps {
  title?: string;
  description?: string;
  cta?: string;
  placeholder?: string;
  buttonLabel?: string;
  disclaimer?: string;
}

export const Subscription = (
  props: ComponentProps<'div'> & SubscriptionProps
) => {
  const { ...rest } = props;
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 lg:container mx-auto'
      {...rest}
    >
      <div className='flex flex-col gap-4'>
        {props.title && <h2 className='text-3xl font-bold'>{props.title}</h2>}
        {props.description && <p className='font-light'>{props.description}</p>}
      </div>
      <form className='flex flex-col gap-4'>
        {props.cta && <h3 className='uppercase font-light'>{props.cta}</h3>}
        <input
          className='border border-gray-900 rounded-md px-4 py-2 font-light'
          placeholder={props.placeholder || 'Email Address'}
          type='email'
        />
        <button
          className='bg-gray-900 text-white px-4 py-2 rounded-md max-w-max self-start hover:bg-gray-700 duration-150 ease-in-out transition-all'
          type='submit'
        >
          {props.buttonLabel || 'Subscribe'}
        </button>
        {props.disclaimer && <p className='font-light'>{props.disclaimer}</p>}
      </form>
    </div>
  );
};
