'use client';

import React, { useState } from 'react';
import { forUseState03Data, Obj } from '../data/index';

const UseState03 = () => {
  const [state, setState] = useState<Obj>(forUseState03Data);

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setState(forUseState03Data);
  };

  const clear = () => {
    setState({ name: '', age: '' });
  };

  return (
    <>
      <p>オブジェクトを操作する</p>
      <div>
        <input type='text' value={state.name} onChange={input} name='name' />
        氏名： {state.name || <span style={{ color: 'blue' }}>未入力です</span>}
      </div>
      <div>
        <input type='number' value={state.age} onChange={input} name='age' />
        年齢： {state.age || <span style={{ color: 'blue' }}>未入力です</span>} {state.age && '歳'}
      </div>
      <button onClick={clear}>空にする</button>
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default UseState03;
