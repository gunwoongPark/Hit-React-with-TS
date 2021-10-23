import React, { useState, useCallback } from 'react';

interface PropType {
  value: number;
  result: number;
}

function Counter(props: PropType) {
  const { value, result } = props;

  const [initialValue, setInitialValue] = useState(value);
  const [initialResult, setInitialResult] = useState(result);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(parseInt(e.target.value))) {
      setInitialValue(parseInt(e.target.value));
    }
  };

  const increase = useCallback(
    (): void => setInitialResult(initialResult + initialValue),
    [initialResult, initialValue],
  );
  const decrease = useCallback(
    (): void => setInitialResult(initialResult - initialValue),
    [initialResult, initialValue],
  );

  return (
    <>
      <h1>{initialResult}</h1>

      <input type='number' value={initialValue} onChange={onChange} />
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
}

export default Counter;
