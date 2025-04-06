'use client';
import { createContext, useContext } from 'react';
import Child01 from './child01';

export const MyContext = createContext('hello');
const UseContext01 = () => {
  const contextValue = useContext(MyContext);
  const props = 'こんにちは';
  return (
    <>
      <p>文字列データをContextから読み込む</p>
      <p>context : {contextValue}</p>
      <p>props : {props}</p>
      <Child01 props={props} />
    </>
  );
};

export default UseContext01;
