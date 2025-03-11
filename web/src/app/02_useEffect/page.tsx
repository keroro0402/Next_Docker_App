import UseEffect01 from '@/app/02_useEffect/components/useEffect01';
import UseEffect02 from '@/app/02_useEffect/components/useEffect02';

const useEffect = () => {
  return (
    <>
      <h2>useEffect</h2>
      <div className='card'>
        <UseEffect01 />
      </div>
      <div className='card'>
        <UseEffect02 />
      </div>
    </>
  );
};

export default useEffect;
