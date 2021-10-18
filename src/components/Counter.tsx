import React, { useState } from 'react';

interface PropType {
  value: number;
  result: number;
}

function Counter(props: PropType) {
  const { value, result } = props;

  const [initialValue, setInitialValue] = useState(value);
  const [initialResult, setInitialResult] = useState(result);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(parseInt(e.target.value))) {
      setInitialValue(parseInt(e.target.value));
    }
  };

  return (
    <>
      <h1>{initialResult}</h1>

      <button onClick={() => setInitialResult(initialResult - initialValue)}>-</button>
      <input type='number' value={initialValue} onChange={onChange} />
      <button onClick={() => setInitialResult(initialResult + initialValue)}>+</button>
    </>
  );
}

export default Counter;
