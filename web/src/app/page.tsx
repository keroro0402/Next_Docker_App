import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h2>React</h2>
      <p>
        <Link href={'./'}>Home</Link>
      </p>
      <p>
        <Link href={'./01_useState'}>useState</Link>
      </p>
      <p>
        <Link href={'./02_useEffect'}>useEffect</Link>
      </p>
      <p>
        <Link href={'./03_useReducer'}>useReducer</Link>
      </p>
      <p>
        <Link href={'./05_memo'}>memo</Link>
      </p>
      <p>
        <Link href={'./06_useCallback'}>useCallback</Link>
      </p>
      <p>
        <Link href={'./07_useMemo'}>useMemo</Link>
      </p>
      <hr></hr>
      <p>
        <Link href={'./04_performance'}>performance</Link>
      </p>
    </>
  );
}
