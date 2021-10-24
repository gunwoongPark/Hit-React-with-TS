import React from 'react';

import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to='/Profile'>프로필</Link>
      <span> / </span>
      <Link to='/Counter'>카운터</Link>
      <span> / </span>
      <Link to='/TodoList'>투두 리스트</Link>

      <Switch>
        <Route
          path='/Profile'
          component={() => (
            <Profile name='박건웅' age={25} email='bung1438@gmail.com' job='front-end developer' />
          )}
        />
        <Route path='/Counter' component={() => <Counter value={1} result={0} />} />
        <Route
          path='/TodoList'
          component={() => (
            <TodoList
              todos={[
                { id: 0, title: '아침먹기', chck: false, isModi: false },
                { id: 1, title: '점심먹기', chck: false, isModi: false },
                { id: 2, title: '저녁먹기', chck: false, isModi: false },
              ]}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
