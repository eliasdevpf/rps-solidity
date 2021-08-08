import Crown from './Assets/Crown.png';
import Laurel from './Assets/Laurel.png';
import Skull from './Assets/Skull.png';
import Bounty from './Assets/Bounty.png';

const Bottom = () => {
  return (
    <div className='p-3 bg-gray-100 w-64 h-36 absolute bottom-4 left-4 flex items-center '>
      <div className=' bg-gray-100  w-full'>
        <div className='flex flex-col justify-between h-auto '>
          <div className='m-2 flex flex-row justify-between items-center'>
            <img src={Crown} alt={''} className='w-10 h-10 object-cover flex' />
            <h1> Number </h1>
            <img
              src={Laurel}
              alt={''}
              className='w-10 h-10 object-cover flex'
            />
            <h1> Number </h1>
          </div>
          <div className='m-2 flex flex-row justify-between items-center'>
            <img src={Skull} alt={''} className='w-10 h-10 object-cover flex' />
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
  );
};
export default Bottom;
