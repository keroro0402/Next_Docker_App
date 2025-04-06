import { MyContext } from './useContext02';
import { useContext } from 'react';

const Child02 = () => {
  const [state] = useContext(MyContext);
  return (
    <>
      <div className='child border area-pink'>
        <h2>Child02コンポーネント</h2>
        <p>{state}</p>
      </div>
    </>
  );
};

export default Child02;
