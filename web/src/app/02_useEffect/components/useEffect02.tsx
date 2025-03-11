'use client';
import { useEffect, useReducer } from 'react';

// type Actionを定義
type Action = {
  type: 'count';
  payload: number;
};

const reducer = (prev: number, { type, payload }: Action) => {
  switch (type) {
    case 'count': {
      return prev + payload;
    }
    default: {
      throw new Error('エラーです');
    }
  }
};

const UseEffect02 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      dispatch({ type: 'count', payload: 1 });
    }, 1000);
    // クリンアップ
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <p>単純なカウント</p>
      <p>{state}</p>
    </>
  );
};

export default UseEffect02;
