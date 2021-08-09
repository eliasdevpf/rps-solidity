import { useState } from 'react';

const Middle = () => {
  const [address, setAddress] = useState('');
  const [card, setCard] = useState();
  const [bet, setBet] = useState();

  const handleCards = (e) => {
    setCard(e.target.id);
  };

  const handleBet = (e) => {
    console.log('execute smart contract bet');
  };
  console.log(bet);

  return (
    <div className='flex justify-center items-center h-2/6 '>
      <div className='w-full px-20'>
        <div className='w-64 flex justify-between items-center'>
          <h2>Adversary</h2>
          <input
            className='m-2 border-2 border-gray-200 rounded w-64 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            value={address}
            placeholder='Enter Address'
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className='mb-1 bg-red-500 w-min whitespace-nowrap text-white font-bold rounded-t px-4 py-2'>
          Player 1
        </div>
        <div className='w-96 flex justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            id='0'
            onClick={handleCards}
          >
            ROCK
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            id='1'
            onClick={handleCards}
          >
            PAPER
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            id='2'
            onClick={handleCards}
          >
            SCISSORS
          </button>
        </div>
        <div className='w-24 whitespace-nowrap'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type='number'
            min='0'
            value={bet}
            placeholder='Enter Bet'
            onChange={(e) => setBet(e.target.value || 0)}
          />

          <button
            className='m-4 flex-shrink-0 bg-green-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='button'
            onClick={handleBet}
          >
            Bet{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Middle;
