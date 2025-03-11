'use client';

import { useEffect, useState } from 'react';
const UseEffect01 = () => {
  const dayArray: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  const [state, setState] = useState<Date | null>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setState(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  if (!state) return null;

  const YEAR = state.getFullYear();
  const MONTH = state.getMonth() + 1;
  const DATE = state.getDate();
  const DAY = dayArray[state.getDay()];
  const HOUR = state.getHours();
  const MIN = state.getMinutes();
  const SECOND = state.getSeconds();

  return (
    <>
      <p>現在時刻を表示する</p>

      <p>
        {YEAR}年{MONTH}月{DATE}日{DAY}曜日{HOUR}時{MIN}分{SECOND}秒
      </p>
    </>
  );
};

export default UseEffect01;
