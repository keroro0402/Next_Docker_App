import React, { useContext } from 'react';
import { MyContext } from './useContext03';

const OtherChild03 = () => {
  const [state] = useContext(MyContext);
  return (
    <>
      <div className={state + '02'}>
        <p>{state === 'red' ? 'ASP:インターネットを通じてソフトウェアアプリケーションを提供する『企業』' : 'SaaS:専門の事業者がインターネットを通じてソフトウェアの機能を提供する『サービス形態』'}</p>
      </div>
    </>
  );
};

export default OtherChild03;
