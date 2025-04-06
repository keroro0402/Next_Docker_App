'use client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Child03 from './child03';
import OtherChild03 from './otherChild03';
export const MyContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => {}]);
const UseContext03 = () => {
  const [state, setState] = useState('red');

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
        <Child03 />
        <OtherChild03 />
      </MyContext.Provider>
    </>
  );
};

export default UseContext03;
