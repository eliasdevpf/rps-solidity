import Crown from './Assets/Crown.png';
import Laurel from './Assets/Laurel.png';
import Skull from './Assets/Skull.png';
import Bounty from './Assets/Bounty.png';
import Component from './component';

const Bottom = () => {
  return (
    <div className=' flex flex-row justify-between absolute bottom-4 w-full left-4 p-3'>
      <div className=' bg-gray-100 w-64 h-36 flex items-center '>
        <div className=' bg-gray-100  w-full'>
          <div className='flex flex-col justify-between h-auto '>
            <div className='m-2 flex flex-row justify-between items-center'>
              <img
                src={Crown}
                alt={''}
                className='w-10 h-10 object-cover flex'
              />
              <h1> Number </h1>
              <img
                src={Laurel}
                alt={''}
                className='w-10 h-10 object-cover flex'
              />
              <h1> Number </h1>
            </div>
            <div className='m-2 flex flex-row justify-between items-center'>
              <img
                src={Skull}
                alt={''}
                className='w-10 h-10 object-cover flex'
              />
              <h1> Number </h1>
              <img
                src={Bounty}
                alt={''}
                className='w-10 h-10 object-cover flex'
              />
              <h1> Number </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col justify- h-2/6 right-4'>
        <div>
          <Component color={'blue'} />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
      </div>
    </div>
  );
};
export default Bottom;
