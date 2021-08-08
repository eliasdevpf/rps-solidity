import Top from './top';
import './App.css';
import Bottom from './bottom';
import Middle from './middle';

function App() {
  return (
    <div className=' w-full h-full absolute'>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
