import Swords from './assets/Swords.png';

const handleFight = (e) => {
  let fight = true;
  console.log(fight);
};

const Top = () => {
  return (
    <div className=' flex justify-end h-2/6'>
      <div className='bg-red-100 w-64 h-32 m-5'>
        <div className='flex flex-col items-left'>
          <img
            src={Swords}
            alt={''}
            className='m-4 w-10 h-10 object-cover flex'
          />
        </div>
        <div className='m-4 flex justify-between w-min'>
          <h1>0x0b31a8a7sdfasdf... </h1>
          <div>
            <button
              className='bg-white-500 hover:bg-blue-700 text-blue font-bold py-1 px-2 rounded absolute'
              onClick={handleFight}
            >
              Fight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
