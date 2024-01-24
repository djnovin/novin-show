import React, { lazy, Suspense } from 'react';

import './remote-modules.d';

import { Header } from 'header/Header';
import { Footer } from 'footer/Footer';
import { Subscription } from 'marketing/Subscription';
import { Campaigns } from 'marketing/Campaigns';
import { Trending } from 'marketing/Trending';

const App = () => {
  return (
    <main className='app'>
      <div>
        <Header />
      </div>
      <div>
        <Campaigns />
        <Trending />
      </div>
      <div>
        <Subscription />
        <Footer />
      </div>
    </main>
  );
};

export default App;
