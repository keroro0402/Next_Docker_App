'use client';

import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import { ERRORMESSAGE } from '@/consts';

interface State {
  status: number | null;
  prefectures: string[] | null;
  message?: string | null;
}

const UseEffect06 = () => {
  const resultObj = {
    status: null,
    prefectures: null,
    message: null,
  };
  const [flg, setFlg] = useState(false);
  const [objState, setObjState] = useState<State>(resultObj);
  const [prefecturesState, setPrefecturesState] = useState('');

  useEffect(() => {
    const BASEURL = 'https://geoapi.heartrails.com/api/json?method=getPrefectures';
    const getPrefectures = async () => {
      try {
        const response = await axios.get(BASEURL);
        const resultObj = {
          status: response.request.status,
          prefectures: response.data.response.prefecture,
        };
        setObjState(resultObj);
      } catch (err) {
        setObjState((prevState) => ({
          ...prevState,
          message: ERRORMESSAGE,
        }));
        console.error(err);
      }
    };
    if (flg) {
      getPrefectures();
    }
  }, [flg]);

  useEffect(() => {
    console.log(prefecturesState);
    const BASEURL = 'https://geoapi.heartrails.com/api/json?method=getCities&prefecture=';
    const str = prefecturesState;
    const get = async () => {
      const result = await axios.get(BASEURL + str);
      console.log(result);
    };
    get();
  }, [prefecturesState]);

  const handle = () => {
    setFlg(true);
  };

  return (
    <>
      <p>検索した場所を地図（googleMap）で表示する</p>
      <div>
        <label>
          <select
            onFocus={handle}
            onChange={(e) => {
              setPrefecturesState(e.target.value);
            }}
          >
            <option>都道府県</option>
            {objState.prefectures ? (
              objState.prefectures.map((item) => {
                return (
                  <Fragment key={item}>
                    <option value={item}>{item}</option>
                  </Fragment>
                );
              })
            ) : (
              <option>都道府県</option>
            )}
          </select>
        </label>
      </div>
    </>
  );
};

export default UseEffect06;
