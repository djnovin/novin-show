import React from 'react';
import cn from 'classnames';
import styles from './Trending.module.css';

export const Trending = () => {
  return (
    <section className='px-4 py-10 lg:container mx-auto flex flex-col gap-10'>
      <h2 className='text-3xl font-light lg:text-center'>Trending now</h2>
      <div
        className={cn(
          'flex flex-row xl:grid xl:grid-cols-4 gap-6 overflow-x-auto overflow-hidden',
          styles.container
        )}
      >
        <a
          className='w-full max-w-xs min-w-[300px]'
          href='#'
          aria-label='View item'
        >
          <div className='relative h-[480px] w-full mb-4'>
            <img
              className='absolute inset-0 h-full w-full object-cover object-center'
              alt='placeholder'
              src='https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10109928/data/a9f4033e135e1a80e97103fe25a141c7/3x4_four-columns/480/2024-01-17-mw-6-webapp-lemaire-ds-lemaire-multicategory-img.jpeg'
            />
          </div>
          <h3 className='uppercase font-light'>Lemaire</h3>
          <p className='font-light'>
            Beautifully crafted styles with timeless appeal
          </p>
        </a>
        <a
          className='w-full max-w-xs min-w-[300px]'
          href='#'
          aria-label='View item'
        >
          <div className='relative h-[480px] w-full mb-4'>
            <img
              className='absolute inset-0 h-full w-full object-cover object-center'
              alt='placeholder'
              src='https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10109928/data/a9f4033e135e1a80e97103fe25a141c7/3x4_four-columns/480/2024-01-17-mw-6-webapp-lemaire-ds-lemaire-multicategory-img.jpeg'
            />
          </div>
          <h3 className='uppercase font-light'>Lemaire</h3>
          <p className='font-light'>
            Beautifully crafted styles with timeless appeal
          </p>
        </a>
        <a
          className='w-full max-w-xs min-w-[300px]'
          href='#'
          aria-label='View item'
        >
          <div className='relative h-[480px] w-full mb-4'>
            <img
              className='absolute inset-0 h-full w-full object-cover object-center'
              alt='placeholder'
              src='https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10109928/data/a9f4033e135e1a80e97103fe25a141c7/3x4_four-columns/480/2024-01-17-mw-6-webapp-lemaire-ds-lemaire-multicategory-img.jpeg'
            />
          </div>
          <h3 className='uppercase font-light'>Lemaire</h3>
          <p className='font-light'>
            Beautifully crafted styles with timeless appeal
          </p>
        </a>
        <a
          className='w-full max-w-xs min-w-[300px]'
          href='#'
          aria-label='View item'
        >
          <div className='relative h-[480px] w-full mb-4'>
            <img
              className='absolute inset-0 h-full w-full object-cover object-center'
              alt='placeholder'
              src='https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10109928/data/a9f4033e135e1a80e97103fe25a141c7/3x4_four-columns/480/2024-01-17-mw-6-webapp-lemaire-ds-lemaire-multicategory-img.jpeg'
            />
          </div>
          <h3 className='uppercase font-light'>Lemaire</h3>
          <p className='font-light'>
            Beautifully crafted styles with timeless appeal
          </p>
        </a>
      </div>
    </section>
  );
};
