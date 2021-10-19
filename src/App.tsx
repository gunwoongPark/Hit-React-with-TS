import React from 'react';

import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <Profile name='박건웅' age={25} email='bung1438@gmail.com' job='front-end developer' />
      <Counter value={1} result={0} />
      <TodoList
        todos={[
          { id: 0, title: '아침먹기', chck: false },
          { id: 1, title: '점심먹기', chck: false },
        ]}
      />
    </div>
  );
}

export default App;
