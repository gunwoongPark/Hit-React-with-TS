import React, { useState, useRef, useCallback } from 'react';

interface TodoItemType {
  id: number;
  title: string;
  chck: boolean;
}

interface PropType {
  todos: TodoItemType[];
}

function TodoList(props: PropType) {
  const [todos, setTodos] = useState(props.todos);
  const [todoInput, setTodoInput] = useState('');

  const nextId = useRef(todos.length);

  const addTodo = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setTodos([...todos, { id: nextId.current, title: todoInput, chck: false }]);
        setTodoInput('');
        nextId.current += 1;
      }
    },
    [nextId, todoInput, todos],
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const toggleTodo = useCallback(
    (id: number) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, chck: !todo.chck } : todo)));
    },
    [todos],
  );

  return (
    <div>
      <input
        type='text'
        placeholder='할 일을 입력하세요.'
        onKeyPress={addTodo}
        value={todoInput}
        onChange={onChange}
      />

      {todos.map((todo) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} key={todo.id}>
            <p>{todo.id + 1}.&nbsp;</p>
            <p style={{ textDecoration: todo.chck ? 'line-through' : 'none' }}>{todo.title}&nbsp;</p>
            <input
              type='checkbox'
              checked={todo.chck}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
