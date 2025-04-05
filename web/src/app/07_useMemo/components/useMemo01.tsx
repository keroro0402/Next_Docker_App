'use client';

import Child from './child';
import { useState } from 'react';

const UseMemo01 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  console.log('親コンポーネントのレンダリング');

  const clickHandler = () => {
    setCountB((prev) => prev + 1);
  };

  return (
    <>
      <div className='parent'>
        <div>
          <h2>親コンポーネント領域</h2>
          <button
            onClick={() => {
              setCountA((prev) => prev + 1);
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
          <div>
            <p>ボタンAクリック回数：{countA}</p>
          </div>
        </div>
        <Child countB={countB} onClick={clickHandler} />
      </div>
    </>
  );
};

export default UseMemo01;
