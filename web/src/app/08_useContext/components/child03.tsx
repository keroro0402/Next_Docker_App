import React, { useContext } from 'react';
import { MyContext } from './useContext03';

const Child03 = () => {
  const [state, setState] = useContext(MyContext);
  const colorArray = ['red', 'blue', 'dark'];
  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
  };
  return (
    <>
      <div className={state + '01'}>
        {colorArray.map((item) => {
          return (
            <label key={item} htmlFor={item}>
              <input type='radio' id={item} checked={item === state} onChange={handleRadio} value={item} />
              {item}
            </label>
          );
        })}
      </div>
    </>
  );
};

export default Child03;
