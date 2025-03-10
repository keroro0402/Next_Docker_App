'use client';

import { useEffect, useState } from 'react';
const UseEffect01 = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>{state}</p>
    </>
  );
};

export default UseEffect01;
