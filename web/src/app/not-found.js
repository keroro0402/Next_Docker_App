'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LIMITTIME, DEFAULTLOADTIME } from '../consts';

export default function NotFound() {
  const router = useRouter();
  const [state, setState] = useState(LIMITTIME);

  useEffect(() => {
    let intervalId = null;
    if (state <= 0) {
      router.push('/');
      return;
    }
    intervalId = setInterval(() => {
      setState((prev) => {
        return prev - DEFAULTLOADTIME;
      });
    }, 1000);
    // クリーンアップ処理
    return () => {
      clearInterval(intervalId);
    };
  }, [state, router]);

  return (
    <>
      <h2>404 : Not Found</h2>
      <p>指定されたURLは存在しません</p>
      <p>{state / DEFAULTLOADTIME}秒後にTOPページにリダイレクトします</p>
    </>
  );
}
