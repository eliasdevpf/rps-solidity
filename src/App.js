import Top from './top';
import './App.css';
import Bottom from './bottom';
import Middle from './middle';

function App() {
  return (
    <div className=' w-full h-full absolute'>
      <Top color={'bg-blue-100'} />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
