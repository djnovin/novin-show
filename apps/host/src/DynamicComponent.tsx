import { Campaigns } from 'marketing/Campaigns';
import { Footer } from 'footer/Footer';
import { Subscription } from 'marketing/Subscription';
import { Header } from 'header/Header';
import React from 'react';
import { Trending } from 'marketing/Trending';
import { useQuery } from '@tanstack/react-query';
import { PageSchema } from './types';
import { fetcher, getPageBySlugQuery } from './queries/getPage';
import { z } from 'zod';

const fetchData = async () => {
  const data = (await fetcher(
    getPageBySlugQuery,
    { slug: '/' },
    PageSchema
  )) as z.infer<typeof PageSchema>;

  return data;
};

const DynamicComponent = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['page'],
    queryFn: fetchData,
  });

  if (data) {
    return (
      <>
        {data?.sections?.pageBuilder?.map((section, i) => {
          let content: JSX.Element | null = null;

          switch (section._type) {
            case 'header':
              content = (
                <Header
                  key={i}
                  {...section}
                />
              );
              break;
            case 'footer':
              content = (
                <Footer
                  key={i}
                  {...section}
                />
              );
              break;
            case 'campaign':
              content = (
                <Campaigns
                  key={i}
                  {...section}
                />
              );
              break;
            case 'trending':
              content = (
                <Trending
                  key={i}
                  {...section}
                />
              );
              break;
            case 'subscription':
              content = (
                <Subscription
                  key={i}
                  {...section}
                />
              );
              break;
          }

          return content;
        })}
      </>
    );
  }

  return (
    <div
      className='alert alert-danger'
      role='alert'
    >
      Error
    </div>
  );
};

export default DynamicComponent;
