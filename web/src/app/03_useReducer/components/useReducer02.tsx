'use client';
import React, { useReducer, useState, Fragment, useEffect } from 'react';
import { ARRAY1 } from '@/app/03_useReducer/data/array';
import { Obj } from '@/app/03_useReducer/data/index';

type Action = {
  type: 'りんご' | 'いちご' | 'みかん';
};

const UseReducer02 = () => {
  const reducer = (prev: Obj[], { type }: Action) => {
    switch (type) {
      case 'りんご': {
        const n = [...prev];
        return n.map((item) => {
          return item.name === 'りんご' ? { ...item, checked: !item.checked } : item;
        });
      }
      case 'みかん': {
        const n = [...prev];
        return n.map((item) => {
          return item.name === 'みかん' ? { ...item, checked: !item.checked } : item;
        });
      }
      case 'いちご': {
        const n = [...prev];
        return n.map((item) => {
          return item.name === 'いちご' ? { ...item, checked: !item.checked } : item;
        });
      }
      default:
        return prev;
    }
  };

  const [total, setTotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, ARRAY1);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.name as 'りんご' | 'いちご' | 'みかん' });
  };
  useEffect(() => {
    const totalAmount = state.filter((item) => item.checked).reduce((sum, item) => sum + item.price, 0);
    setTotal(totalAmount);
  }, [state]);

  return (
    <>
      <p>複数のチェックボックスを操作</p>
      {state.map((item: Obj) => {
        return (
          <Fragment key={item.id}>
            <label htmlFor={`${item.id}`}>
              <input type='checkbox' onChange={handle} name={item.name} value={item.price} checked={item.checked} id={`${item.id}`} />
              {item.name} : {item.price}円
            </label>
            <br></br>
          </Fragment>
        );
      })}
      <p>
        合計金額：<b>{total}</b>円
      </p>
    </>
  );
};

export default UseReducer02;
