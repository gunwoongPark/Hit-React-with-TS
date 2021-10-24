import React, { useState, useCallback } from 'react';

interface PropType {
  value: number;
  result: number;
}

function Counter(props: PropType) {
  const { value, result } = props;

  const [initialValue, setInitialValue] = useState<number>(value);
  const [initialResult, setInitialResult] = useState<number>(result);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(parseInt(e.target.value))) {
      setInitialValue(parseInt(e.target.value));
    }
  };

  const increase = useCallback(
    (): void => setInitialResult((prevInitialResult: number) => prevInitialResult + initialValue),
    [initialValue],
  );
  const decrease = useCallback(
    (): void => setInitialResult((prevInitialResult: number) => prevInitialResult - initialValue),
    [initialValue],
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
