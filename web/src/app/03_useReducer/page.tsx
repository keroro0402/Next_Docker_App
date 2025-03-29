import UseReducer01 from './components/useReducer01';
import UseReducer02 from './components/useReducer02';

export default function UseReducer() {
  return (
    <>
      <h2>useReducer</h2>
      <div className='card'>
        <UseReducer02 />
      </div>
      <div className='card'>
        <UseReducer01 />
      </div>
    </>
  );
}
