import UseEffect01 from '@/app/02_useEffect/components/useEffect01';
import UseEffect02 from '@/app/02_useEffect/components/useEffect02';
import UseEffect03 from '@/app/02_useEffect/components/useEffect03';

const useEffect = () => {
  return (
    <>
      <h2>useEffect</h2>
      <p>副作用（サイドエフェクト）の処理を行うためのフック</p>
      <details className='accordion-003 fs_small '>
        <ul className='m-0'>
          <li>APIの呼び出し（データフェッチ）</li>
          <li>イベントリスナーの設定（例えば、スクロールイベントやキーボードイベントの監視）</li>
          <li>タイマーの設定（setIntervalやsetTimeoutの使用）</li>
          <li>DOMの変更（直接DOM操作を行う場合）</li>
          <li>サーバーとの通信や、外部のライブラリとのインタラクション</li>
        </ul>
      </details>
      <div className='card'>
        <UseEffect01 />
      </div>
      <div className='card'>
        <UseEffect02 />
      </div>
      <div className='card'>
        <UseEffect03 />
      </div>
    </>
  );
};

export default useEffect;
