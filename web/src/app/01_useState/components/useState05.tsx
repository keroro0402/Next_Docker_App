'use client';

import { ARRAY1 } from '@/app/01_useState/data/array';
import React, { useState } from 'react';

const UseState05 = () => {
  const [state, setState] = useState('');
  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <>
      <p>配列をフィルターする</p>
      氏名でフィルター<br></br>
      <input type='text' onChange={filter} />
      <ul>
        {ARRAY1.filter((item) => {
          return item.name.indexOf(state) !== -1;
        }).map((item) => {
          return (
            <li key={item.name}>
              {item.name}：{item.age}歳
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseState05;
