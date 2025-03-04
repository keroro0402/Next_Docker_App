import UseState01 from './components/useState01';
import UseState02 from './components/useState02';
import '../globals.css';
export default function UseState() {
  return (
    <>
      <h2>useState</h2>
      <div className='card'>
        <UseState01 />
      </div>
      <div className='card'>
        <UseState02 />
      </div>
    </>
  );
}
