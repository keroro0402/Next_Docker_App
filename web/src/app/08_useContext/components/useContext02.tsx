'use client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Child02 from './child02';
import OtherChild02 from './otherChild02';

export const MyContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => {}]);
const UseContext02 = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <p>stateデータをContextから読み込む</p>
      <MyContext.Provider value={[state, setState]}>
        <Child02 />
        <OtherChild02 />
      </MyContext.Provider>
    </>
  );
};

export default UseContext02;
