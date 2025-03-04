'use client';

import React, { useState } from 'react';

export default function UseState02() {
  const [state, setState] = useState('');

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <>
      <div>
        <p>文字を操作する</p>
        <input type='text' onChange={input} />
        <p>{state || <span style={{ color: 'blue' }}>未入力です</span>}</p>
      </div>
    </>
  );
}
