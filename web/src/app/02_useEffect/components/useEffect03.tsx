'use client';
import { useEffect, useState } from 'react';

const UseEffect03 = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state === true) {
      window.alert('クリックされました');
      setState(false);
    }
  }, [state]);

  return (
    <>
      <p>ボタンクリックでアラートを上げる</p>
      <p>
        <button
          onClick={() => {
            setState(true);
          }}
        >
          アラートを上げる
        </button>
      </p>
    </>
  );
};

export default UseEffect03;
