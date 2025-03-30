'use client';

import Child from './child';
import ChildMemo from './useCallbackChild';
import { useState, useCallback } from 'react';

const UseCallback01 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  console.log('親コンポーネントのレンダリング');

  const clickHandler = useCallback(() => {
    setCountB((pre) => pre + 1);
  }, []);

  /* 
依存配列に値を入れる場合：ステートの値を使って更新関数を実行している場合に依存配列を使う
  const clickHandler = useCallback(() => {
    setCountB(countB + 1);
  }, [countB]);

*/

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
        </div>
        <div>
          <p>ボタンAクリック回数：{countA}</p>
        </div>
        <Child countB={countB} />
        <ChildMemo countB={countB} onClick={clickHandler} />
      </div>
    </>
  );
};

export default UseCallback01;
