import React from 'react';

interface HeaderProps {
  links: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  dropdowns: {
    svg: string;
  }[];
}

export const Header = (props: HeaderProps) => {
  const { links, dropdowns } = props;
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
      <header
        className='grid grid-cols-3 py-4 px-8'
        {...props}
      >
        <div className='col-span-1'>
          {links && links.length > 0 && (
            <ul className='flex flex-row gap-4'>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.slug.current}>{link.title}</a>
                </li>
              ))}
            </ul>
          )}
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
            {dropdowns &&
              dropdowns?.length > 0 &&
              dropdowns?.map((dropdown, i) => (
                <div key={i}>
                  {(() => {
                    switch (dropdown.svg) {
                      case 'cart':
                        return (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                            />
                          </svg>
                        );
                      case 'wishlist':
                        return (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                            />
                          </svg>
                        );
                      case 'user':
                        return (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                            />
                          </svg>
                        );
                      case 'settings':
                        return (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                            />
                          </svg>
                        );
                      default:
                        return null;
                    }
                  })()}
                </div>
              ))}
          </div>
        </div>
      </header>
    </>
  );
};
