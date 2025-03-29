import UseState01 from './components/useState01';
import UseState02 from './components/useState02';
import UseState03 from './components/useState03';
import UseState04 from './components/useState04';
import UseState05 from './components/useState05';
export default function UseState() {
  return (
    <>
      <h2>useState</h2>
      <div className='card'>
        <UseState05 />
      </div>
      <div className='card'>
        <UseState01 />
      </div>
      <div className='card'>
        <UseState02 />
      </div>
      <div className='card'>
        <UseState03 />
      </div>
      <div className='card'>
        <UseState04 />
      </div>
    </>
  );
}
