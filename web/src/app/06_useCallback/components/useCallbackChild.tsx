import { memo } from 'react';

type useCallbackProps = {
  countB: number;
  onClick: () => void;
};

const UsecallbackChild = memo(({ countB, onClick }: useCallbackProps) => {
  console.log('UsecallbackChildコンポーネントのレンダリング');
  return (
    <div className='moemochild border area-green'>
      <div>
        <h3 className='mb-0'>UseCallbackChildコンポーネント領域</h3>
        <p className='mt-0 fs_small'>useCallbackとmemoで関数コンポーネントメモ化しているのでボタンAを押しても再レンダリングされない</p>
      </div>
      <div>
        <button onClick={onClick}>ボタンB</button>
        <span>子のpropsに渡すstateを更新</span>
      </div>
      <div>
        <p>ボタンBクリック回数：{countB}</p>
      </div>
    </div>
  );
});

UsecallbackChild.displayName = 'UsecallbackChild';

export default UsecallbackChild;
