import React from 'react';
import { Campaigns } from 'marketing/Campaigns';
import { Footer } from 'footer/Footer';
import { Header } from 'header/Header';
import { PageSchema } from './types';
import { Subscription } from 'marketing/Subscription';
import { Trending } from 'marketing/Trending';
import { fetcher, getPageBySlugQuery } from './queries/getPage';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const fetchData = async (params: { slug: string }) => {
  const data = (await fetcher(
    getPageBySlugQuery,
    { slug: params.slug },
    PageSchema
  )) as z.infer<typeof PageSchema>;

  console.log(data);

  return data;
};

interface DynamicComponentProps {
  slug: string;
}

const DynamicComponent = (props: DynamicComponentProps) => {
  const { slug } = props;

  const { data, error, isLoading } = useQuery({
    queryKey: ['page'],
    queryFn: () =>
      fetchData({
        slug,
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                  links={section.links}
                  dropdowns={section.dropdown}
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

  return null;
};

export default DynamicComponent;
