'use client';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { DEFAULTLOADTIME } from '@/consts';

type Action = {
  type: '取得';
  action: boolean;
};

const UseEffect05 = () => {
  const [state, setState] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mes, setMes] = useState<string>('');
  const reducer = (prev: boolean, { type, action }: Action) => {
    switch (type) {
      case '取得': {
        return action;
      }
      default: {
        return prev;
      }
    }
  };
  const [flg, dispatch] = useReducer(reducer, false);

  useEffect(() => {
    const url = 'https://firestore.googleapis.com/v1/projects/hello-ea97c/databases/(default)/documents/Standardization';
    const get = async () => {
      try {
        const response = await axios.get(url);
        const result = response.data.documents[Math.floor(Math.random() * 6)].fields.text.stringValue;
        setTimeout(() => {
          setMes('');
          setState(result);
          dispatch({ type: '取得', action: false });
        }, DEFAULTLOADTIME);
      } catch (err) {
        setError('取得できませんでした');
        console.error(err);
      }
    };
    if (flg) {
      get();
    }
  }, [flg]);

  const handle = () => {
    setState(null); // 前の結果をリセット
    setError(null); // エラーメッセージをリセット
    setMes('取得中・・・');
    dispatch({ type: '取得', action: !flg });
  };
  return (
    <>
      <p>REST APIを介してCloud Firestoreからデータを取得する</p>
      <p>{state ? state : error ? error : mes}</p>
      <p>
        <button onClick={handle}>取得</button>
      </p>
    </>
  );
};

export default UseEffect05;
