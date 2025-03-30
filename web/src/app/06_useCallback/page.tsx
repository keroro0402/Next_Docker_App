import UseCallback01 from '@/app/06_useCallback/components/useCallback01';

export default function UseCallback() {
  return (
    <>
      <h2>useCallback</h2>
      <details className='accordion-003 fs_small '>
        <summary>useCallbackとは</summary>
        <p className='m-0'>useCallbackを使うと子コンポーネントで参照する値が関数の場合、子コンポーネントの再レンダリングを防ぐことができる</p>
      </details>
      <div className='card'>
        <UseCallback01 />
      </div>
    </>
  );
}
