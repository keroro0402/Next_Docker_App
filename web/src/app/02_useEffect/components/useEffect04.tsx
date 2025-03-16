'use client';

import { useEffect, useState } from 'react';

const UseEffect04 = () => {
  const [state, setState] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    minsec: 0,
  });
  const formatedHour = String(state.hour).padStart(2, '0');
  const formatedMin = String(state.min).padStart(2, '0');
  const formatedSec = String(state.sec).padStart(2, '0');
  const formatedMinSec = String(state.minsec).padStart(2, '0');
  const [flg, setFlg] = useState(false);
  useEffect(() => {
    let timerId: number | NodeJS.Timeout | null = null;
    if (flg) {
      timerId = setInterval(() => {
        setState((prev) => {
          let newMinsec = prev.minsec + 1;
          let newSec = prev.sec;
          let newMin = prev.min;
          let newHour = prev.hour;

          if (newMinsec === 100) {
            newSec = prev.sec + 1;
            newMinsec = 0;
          }
          if (newSec === 60) {
            newMin = prev.min + 1;
            newSec = 0;
          }
          if (newMin === 60) {
            newHour = prev.hour + 1;
            newMin = 0;
          }

          return {
            ...prev,
            hour: newHour,
            min: newMin,
            sec: newSec,
            minsec: newMinsec,
          };
        });
      }, 10);
    } else {
      if (timerId) clearInterval(timerId);
    }
    // クリーンアップ処理
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [flg]);

  return (
    <>
      <p>ボタン付きカウンター作成</p>
      <p>
        {formatedHour}時{formatedMin}分{formatedSec}.{formatedMinSec}秒
      </p>
      <button
        onClick={() => {
          setFlg((prev) => !prev);
        }}
      >
        {flg ? 'カウント停止' : 'カウント開始'}
      </button>
      <button
        onClick={() => {
          setState({
            hour: 0,
            min: 0,
            sec: 0,
            minsec: 0,
          });
        }}
      >
        リセット
      </button>
    </>
  );
};

export default UseEffect04;
