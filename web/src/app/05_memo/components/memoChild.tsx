import { memo } from 'react';

type MemoChildProps = {
  countB: number;
};

const MemoChild = memo(({ countB }: MemoChildProps) => {
  console.log('MemoChildコンポーネントのレンダリング');
  return (
    <div className='moemochild border area-green'>
      <div>
        <h3 className='mb-0'>MemoChildコンポーネント領域</h3>
        <p className='mt-0 fs_small'>memo関数で関数コンポーネントを囲っているのでボタンAを押しても再レンダリングされない</p>
      </div>
      <div>
        <p>ボタンBクリック回数：{countB}</p>
      </div>
    </div>
  );
});

MemoChild.displayName = 'MemoChild';

export default MemoChild;
