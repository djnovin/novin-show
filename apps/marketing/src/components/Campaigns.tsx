import React, { ComponentProps } from 'react';

export const Campaigns = (props: ComponentProps<'section'>) => {
  const { ...rest } = props;
  return (
    <section
      className='h-[560px] relative overflow-clip z-0 px-4 justify-end pb-8 flex flex-col'
      {...rest}
    >
      <img
        alt=''
        className='w-full h-full object-cover absolute z-0 top-0 left-0 right-0 bottom-0'
        src='https://au.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_january/central/Men_SS24_Campaign_WW_HP_Push_V1201_DI3.jpg?wid=1090'
      />
      <div className='relative z-10 flex flex-col'>
        <h1 className='text-xl lg:text-4xl text-white font-light text-center'>
          CLOSET CAMPAIGN
        </h1>
        <div className='flex flex-row justify-center items-center gap-2 text-xs font-light text-white uppercase'>
          <button className='bg-white text-black px-4 py-2 rounded-md mt-4 border border-black min-w-32 min-h-10'>
            SHOW NOW
          </button>
          <button className='bg-white text-black px-4 py-2 rounded-md mt-4 border border-black min-w-32 min-h-10'>
            DISCOVER
          </button>
        </div>
      </div>
    </section>
  );
};
