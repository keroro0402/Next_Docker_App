'use client';

import { useState } from 'react';

export default function UseState01() {
  const [state, setState] = useState(0);
  const [error, setError] = useState('');
  const calc = (calcType: string) => {
    switch (calcType) {
      case '+': {
        setState((prev) => prev + 1);
        break;
      }
      case '-': {
        setState((prev) => prev - 1);
        break;
      }
      default: {
        setError('対象外です');
        break;
      }
    }
  };
  return (
    <>
      <div>
        <p>数字を操作する</p>
        <p>{state}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          onClick={() => {
            calc('+');
          }}
        >
          加算
        </button>
        <button
          onClick={() => {
            calc('-');
          }}
        >
          減算
        </button>
      </div>
    </>
  );
}
