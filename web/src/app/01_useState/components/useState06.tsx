'use client';
import React, { useState } from 'react';

const UseState06 = () => {
  const [state, setState] = useState('');

  const inputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <>
      <p>入力文字を操作する</p>
      <input type='text' onChange={inputVal} />
      <p>{state ? state : <span style={{ color: 'blue' }}>未入力です</span>}</p>
    </>
  );
};

export default UseState06;
