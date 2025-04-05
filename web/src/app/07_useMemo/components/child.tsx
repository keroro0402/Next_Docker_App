import { useMemo } from 'react';

type useCallbackProps = {
  countB: number;
  onClick: () => void;
};
const Child = ({ countB, onClick }: useCallbackProps) => {
  console.log('Childコンポーネントのレンダリング');

  return useMemo(() => {
    console.log('useMemoChildコンポーネントのレンダリング');
    return (
      <>
        <div className='child border area-pink'>
          <div>
            <h3>Childコンポーネント領域</h3>
            {/* <p className='mt-0 fs_small'>memo関数を未使用なのでボタンAを押すと再レンダリングされる</p> */}
            <button onClick={onClick}>ボタンB</button>
            <p>ボタンBのクリック回数：{countB}</p>
          </div>
        </div>
      </>
    );
  }, [countB, onClick]);
};

export default Child;
