'use client';

import { useState } from 'react';

const Performance01 = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <h2 className='mb-0'>Reactで画面更新する流れ</h2>
      <p className='mt-0 mb-0'>Reactは以下の順に画面を更新する</p>
      <div>
        <h3 className='mb-0'>１：トリガー</h3>
        <p className='mt-0 mb-0'>
          何らかの契機にレンダリングを予約することで、具体的には
          <b>
            <u>更新用関数（以下、赤文字部分）の実行</u>
          </b>
          を指す
        </p>
        <p>
          const [state, <span className='color-red'>setState</span>] = useState(0)
        </p>
        <p>
          const [state, <span className='color-red'>dispatch</span>] = useReducer(reducer, 0)
        </p>
      </div>
      <div>
        <h3 className='mb-0'>２：レンダリング</h3>
        <p className='mt-0 mb-0'>
          コンポーネントを実行することで、具体的には
          <b>
            <u>関数コンポーネントの実行（以下のようなタグをimport先のコンポーネントに書くこと</u>
          </b>
          を指す
        </p>
        <p>{'<Performance />'}</p>
      </div>
      <div>
        <h3 className='mb-0'>３：コミット</h3>
        <p className='mt-0 mb-0'>更新部分をDOMに反映して画面が更新される</p>
      </div>
      <hr></hr>
      <input
        type='button'
        value={'更新'}
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      />
      {state}回目の更新
    </>
  );
};

export default Performance01;
