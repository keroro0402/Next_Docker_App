'use client';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

type Adress = {
  address1: string | null;
  kana1: string | null;
  address2: string | null;
  kana2: string | null;
  address3: string | null;
  kana3: string | null;
  prefcode: string | null;
  zipcode: string | null;
  message: string | null;
};

type Action = {
  type: string;
  payload: { results: Adress[]; message?: string };
};

const useEffect02 = () => {
  const [flg, setFlg] = useState(true);

  const [result, setResult] = useState<Adress | string>('');
  const reducer = (prev: Adress | string, { type, payload }: Action) => {
    switch (Number(type)) {
      case 200: {
        const newObj: Adress = { address1: payload.results[0].address1, kana1: payload.results[0].kana1, address2: payload.results[0].address2, kana2: payload.results[0].kana2, address3: payload.results[0].address3, kana3: payload.results[0].kana3, prefcode: payload.results[0].prefcode, zipcode: payload.results[0].zipcode, message: null };
        setResult(newObj);
        setFlg(false);
        return newObj.zipcode;
      }
      case 400: {
        const newObj: Adress = { address1: null, kana1: '', address2: null, kana2: '', address3: null, kana3: '', prefcode: null, zipcode: null, message: payload.message || null };
        setResult(newObj);
        setFlg(true);
        return prev;
      }
      default: {
        return payload;
      }
    }
  };

  const [postnum, dispatch] = useReducer(reducer, '');
  useEffect(() => {
    const getAdress = async () => {
      try {
        const BASEURL = new URL('https://zipcloud.ibsnet.co.jp/api/search');
        BASEURL.searchParams.append('zipcode', postnum);
        const TARGETURL = BASEURL.toString();
        const response = await axios.get(TARGETURL);
        dispatch({ type: response.data.status, payload: response.data });
      } catch (err) {
        console.error(err);
      }
    };

    getAdress();
  }, [postnum]);

  const searchAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: '取得', payload: e.target.value });
  };
  return (
    <>
      <p>郵便番号から住所検索</p>
      郵便番号 <input type='text' value={postnum} onChange={searchAdress} /> の住所は<br></br>
      {flg ? (
        <p style={{ color: 'blue' }}>{result.message}</p>
      ) : (
        <div>
          <div>
            <label>
              都道付県名
              <input type='text' name='address1' value={result.address1} readOnly />
            </label>
          </div>
          <div>
            <label>
              市区町村名
              <input type='text' name='address2' value={result.address2} readOnly />
            </label>
          </div>
          <div>
            <label>
              町域名
              <input type='text' name='address3' value={result.address3} readOnly />
            </label>
          </div>
          <div>
            <label>
              読み仮名
              <textarea name='kana' readOnly className='width_large' value={`${result.kana1}${result.kana2}${result.kana3}`} />
            </label>
          </div>
          です。
        </div>
      )}
    </>
  );
};

export default useEffect02;
