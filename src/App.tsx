import React from 'react';

import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Profile name='박건웅' age={25} email='bung1438@gmail.com' job='front-end developer' />
      <Counter value={1} result={0} />
    </div>
  );
}

export default App;
