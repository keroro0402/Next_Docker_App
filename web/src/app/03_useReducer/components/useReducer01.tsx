'use client';
import React, { useReducer } from 'react';

type Action = {
  type: 'selectFruit';
  payload: string;
};

type Fruit = 'Apple' | 'Peach' | 'Banana';

const UseReducer01 = () => {
  const reducer = (prev: string, { type, payload }: Action) => {
    switch (type) {
      case 'selectFruit':
        return payload;
      default:
        return prev;
    }
  };
  const FruitsArray: Fruit[] = ['Apple', 'Peach', 'Banana'];
  const [state, dispatch] = useReducer(reducer, FruitsArray[0]);
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFruit = e.target.value as Fruit;
    if (FruitsArray.includes(selectedFruit)) {
      dispatch({ type: 'selectFruit', payload: e.target.value });
    }
  };

  return (
    <>
      <p>ラジオボタンを操作</p>
      {FruitsArray.map((item) => {
        return (
          <label htmlFor={item} key={item}>
            <input type='radio' value={item} onChange={handle} checked={state === item} id={item} />
            {item}
          </label>
        );
      })}
      <p>
        <b>{state}</b>が選択されました
      </p>
    </>
  );
};

export default UseReducer01;
