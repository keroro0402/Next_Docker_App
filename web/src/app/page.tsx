import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h2>React</h2>
      <p>
        <Link href={'./'}>Home</Link>
      </p>
    </>
  );
}
