import Memo01 from '@/app/05_memo/components/memo01';

export default function UseReducer() {
  return (
    <>
      <h2>memo</h2>
      <details className='accordion-003 fs_small '>
        <summary>memoとは</summary>
        <p className='m-0'>memoを使うと子コンポーネントで参照する値（props）が更新されない限り子コンポーネントの再レンダリングをしないようにできる。</p>
      </details>
      <div className='card'>
        <Memo01 />
      </div>
    </>
  );
}
