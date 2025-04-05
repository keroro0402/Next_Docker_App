'use client';

import React, { useState } from 'react';

const UseState07 = () => {
  const [state, setState] = useState(0);
  const calc = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    switch (e.currentTarget.value) {
      case '加算': {
        setState((prev) => prev + 1);
        return;
      }
      case '減算': {
        setState((prev) => prev - 1);
        return;
      }
      default: {
        setState((prev) => prev);
        return;
      }
    }
  };
  return (
    <>
      <p>数字の操作</p>
      <p>{state}</p>
      <input type='button' onClick={calc} value='加算' />
      <input type='button' onClick={calc} value='減算' />
    </>
  );
};

export default UseState07;
