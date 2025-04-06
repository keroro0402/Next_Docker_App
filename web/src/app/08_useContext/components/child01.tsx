import { MyContext } from './useContext01';
import { useContext } from 'react';
import GrandChild01 from './grandChild01';

interface Props {
  props: string;
}

const Child01 = ({ props }: Props) => {
  const value = useContext(MyContext);
  return (
    <>
      <div className='child border area-pink'>
        <h2>Child01コンポーネント</h2>
        <p>useContextで取得した値：{value}</p>
        <p>親からpropsで渡ってきた値：{props}</p>
        <GrandChild01 props={props} />
      </div>
    </>
  );
};

export default Child01;
