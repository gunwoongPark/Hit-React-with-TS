import React, { useState, useRef, useCallback } from 'react';

interface TodoItemType {
  id: number;
  title: string;
  chck: boolean;
  isModi: boolean;
}

interface PropType {
  todos: TodoItemType[];
}

function TodoList(props: PropType) {
  const [todos, setTodos] = useState<TodoItemType[]>(props.todos);
  const [todoInput, setTodoInput] = useState<string>('');
  const [modiInput, setModiInput] = useState<string>('');

  const nextId = useRef(todos.length);

  const addTodo = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        setTodos((prevTodos: TodoItemType[]) => [
          ...prevTodos,
          { id: nextId.current, title: todoInput, chck: false, isModi: false },
        ]);
        setTodoInput('');
        nextId.current += 1;
      }
    },
    [todoInput],
  );

  const clickAddTodo = useCallback((): void => {
    setTodos((prevTodos: TodoItemType[]) => [
      ...prevTodos,
      { id: nextId.current, title: todoInput, chck: false, isModi: false },
    ]);
    setTodoInput('');
    nextId.current += 1;
  }, [todoInput]);

  const onModi = useCallback(
    (id: number): void => {
      setTodos((prevTodos: TodoItemType[]) =>
        prevTodos.map((todo: TodoItemType) =>
          todo.id === id ? { ...todo, isModi: true } : { ...todo, isModi: false },
        ),
      );
      setModiInput(todos.find((todo: TodoItemType) => todo.id === id)?.title as React.SetStateAction<string>);
    },
    [todos],
  );

  const changeModi = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setModiInput(e.target.value);
  };

  const modiComplete = (id: number): void => {
    setTodos((prevTodos: TodoItemType[]) =>
      prevTodos.map((todo: TodoItemType) =>
        todo.id === id ? { ...todo, title: modiInput, isModi: false } : todo,
      ),
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos((prevTodos: TodoItemType[]) => prevTodos.filter((todo: TodoItemType) => todo.id !== id));
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prevTodos: TodoItemType[]) =>
      prevTodos.map((todo: TodoItemType) => (todo.id === id ? { ...todo, chck: !todo.chck } : todo)),
    );
  };

  return (
    <div>
      {/* test */}
      <input
        type='text'
        placeholder='할 일을 입력하세요.'
        onKeyPress={addTodo}
        value={todoInput}
        onChange={changeInput}
      />
      <button onClick={clickAddTodo}>확인</button>

      {todos.map((todo, idx) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} key={todo.id}>
            <p>{idx + 1}.&nbsp;</p>
            {todo.isModi ? (
              <>
                <input value={modiInput} onChange={changeModi} />
                <button onClick={() => modiComplete(todo.id)}>수정 완료</button>
              </>
            ) : (
              <>
                <p style={{ textDecoration: todo.chck ? 'line-through' : 'none' }}>{todo.title}&nbsp;</p>
                <input type='checkbox' checked={todo.chck} onChange={() => toggleTodo(todo.id)} />
                <button onClick={() => onModi(todo.id)}>수정</button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
