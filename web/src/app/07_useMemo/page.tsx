import UseMemo01 from './components/useMemo01';
import Link from 'next/link';

export default function UseMemo() {
  return (
    <>
      <h2>useMemo</h2>
      <details className='accordion-003 fs_small '>
        <summary>useMemoとは</summary>
        <p className='m-0'>
          <Link href={'/05_memo'}>memo</Link>に似ているが、useMemoは全てのリソースをメモ化できる。
        </p>
      </details>

      <div className='card'>{<UseMemo01 />}</div>
    </>
  );
}
