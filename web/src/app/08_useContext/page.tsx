import UseContext01 from '@/app/08_useContext/components/useContext01';

export default function UseContext() {
  return (
    <>
      <h2>useContext</h2>
      <details className='accordion-003 fs_small '>
        <summary>useContextとは</summary>
        <p className='m-0'>Reactアプリケーション内でデータをグローバルに共有するための仕組み。createContextでグローバルに共有するための値を設定し、useContextでその値を使用する。</p>
      </details>

      <div className='card'>{<UseContext01 />}</div>
    </>
  );
}
