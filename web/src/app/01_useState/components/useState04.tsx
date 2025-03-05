'use client';

import React, { useState } from 'react';
import { forUseState04Data, Obj2 } from '../data/index';

const UseState03 = () => {
  const [state, setState] = useState<Obj2[]>(forUseState04Data);

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(
      state.map((obj) => {
        return Number(e.target.id) === obj.id ? { ...obj, [e.target.name]: e.target.value } : obj;
      })
    );
  };

  return (
    <>
      <p>オブジェクトが入った配列を操作する</p>
      {state.map((obj) => {
        return (
          <div key={obj.id}>
            <div>
              <input type='text' id={`${obj.id}`} value={obj.name} onChange={input} name='name' />
              氏名： {obj.name || <span style={{ color: 'blue' }}>未入力です</span>}
            </div>
            <div>
              <input type='number' id={`${obj.id}`} value={obj.age} onChange={input} name='age' />
              年齢： {obj.age || <span style={{ color: 'blue' }}>未入力です</span>} {obj.age && '歳'}
            </div>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default UseState03;
