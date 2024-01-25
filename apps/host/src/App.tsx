import React, { lazy, Suspense } from 'react';

import './remote-modules.d';

import { Header } from 'header/Header';
import { Footer } from 'footer/Footer';
import { Subscription } from 'marketing/Subscription';
import { Campaigns } from 'marketing/Campaigns';
import { Trending } from 'marketing/Trending';
import DynamicComponent from './DynamicComponent';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DynamicComponent slug={'/'} />,
  },
  {
    path: '/women',
    element: <DynamicComponent slug={'/women'} />,
  },
]);

const App = () => {
  return (
    <main className='app'>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
