import Memo01 from '@/app/05_memo/components/memo01';
import Link from 'next/link';

export default function Memo() {
  return (
    <>
      <h2>memo</h2>
      <details className='accordion-003 fs_small '>
        <summary>memoとは</summary>
        <p className='m-0'>
          memoを使うと子コンポーネントで参照する値（props）が更新されない限り子コンポーネントの再レンダリングをしないようにできる。<br></br>但し、関数をpropsで渡す場合は再レンダリングされるので、その場合は<Link href={'/06_useCallback'}>useCallback</Link>も併用する。
        </p>
      </details>
      <details className='accordion-003 fs_small '>
        <summary>memoの注意点</summary>
        <p className='m-0'>
          memo化できるのは【<b>コンポーネント</b>】のみ
        </p>
      </details>
      <div className='card'>
        <Memo01 />
      </div>
    </>
  );
}
