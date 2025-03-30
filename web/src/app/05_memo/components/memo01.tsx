'use client';

import Child from './child';
import ChildMemo from './memoChild';
import { useState } from 'react';

const Memo01 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  console.log('親コンポーネントのレンダリング');

  return (
    <>
      <div className='parent'>
        <div>
          <h3>親コンポーネント領域</h3>
          <div>
            <button
              onClick={() => {
                setCountA((pre) => pre + 1);
              }}
            >
              ボタンA
            </button>
            <span>親のstateを更新</span>
          </div>
          <br></br>
          <div>
            <button
              onClick={() => {
                setCountB((pre) => pre + 1);
              }}
            >
              ボタンB
            </button>
            <span>子のpropsに渡すstateを更新</span>
          </div>
        </div>
        <div>
          <p>ボタンAクリック回数：{countA}</p>
        </div>
        <Child countB={countB} />
        <ChildMemo countB={countB} />
      </div>
    </>
  );
};

export default Memo01;
