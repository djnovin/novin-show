import { Campaigns } from './components/Campaigns';
import { Subscription } from './components/Subscription';
import { Trending } from './components/Trending';

const App = () => {
  return (
    <div>
      <Campaigns />
      <Trending />
      <Subscription />
    </div>
  );
};

export default App;
