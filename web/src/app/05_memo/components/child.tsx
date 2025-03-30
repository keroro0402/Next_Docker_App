type ChildProps = {
  countB: number;
};

const Child = ({ countB }: ChildProps) => {
  console.log('Childコンポーネントのレンダリング');
  return (
    <div className='child border area-pink'>
      <div>
        <h3>Childコンポーネント領域</h3>
        <p className='mt-0 fs_small'>memo関数を未使用なのでボタンAを押すと再レンダリングされる</p>
      </div>
      <div>
        <p>ボタンBクリック回数：{countB}</p>
      </div>
    </div>
  );
};

Child.displayName = 'Child';

export default Child;
