const Middle = () => {
  return (
    <div className='flex justify-center items-center h-2/6 '>
      <div className='w-32'>
        <div className='w-52 flex justify-between'>
          <h2>Adversary</h2>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type='text'
            value=''
          ></input>
        </div>
        <div className='bg-red-500 w-min whitespace-nowrap text-white font-bold rounded-t px-4 py-2'>
          Player 1
        </div>
        <div className='flex justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            ROCK
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            PAPER
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            SCISSORS
          </button>
        </div>
        <div className='w-min whitespace-nowrap'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type='text'
            value=''
          ></input>
          <button
            className='flex-shrink-0 bg-green-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='button'
          >
            Bet{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Middle;
