import { MyContext } from './useContext01';
import { useContext } from 'react';

interface Props {
  props: string;
}

const GrandChild01 = ({ props }: Props) => {
  const value = useContext(MyContext);
  return (
    <>
      <div className='grandchild border area-green'>
        <h2>GrandChild01コンポーネント</h2>
        <p>useContextで取得した値：{value}</p>
        <p>親→子にpropsで渡ってきた値：{props}</p>
      </div>
    </>
  );
};

export default GrandChild01;
