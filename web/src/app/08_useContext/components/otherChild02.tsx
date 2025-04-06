import React, { useContext } from 'react';
import { MyContext } from './useContext02';
const OtherChild02 = () => {
  const [, setState] = useContext(MyContext);
  const calc = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setState((prev) => prev + Number(value));
  };
  return (
    <>
      <div className='grandchild border area-green'>
        <h2>OtherChild02コンポーネント</h2>
        <input value={1} type='button' onClick={calc} />
      </div>
    </>
  );
};

export default OtherChild02;
