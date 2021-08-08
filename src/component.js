const Component = ({ color }) => {
  return (
    <div
      className={`border-black border-2 font-bold rounded-full py-2 px-6 bg-${color}-100`}
    >
      <span className='mr-1'>Adress</span>
      <span className='mr-1'>Variation</span>
      <span className='mr-1'>Amount</span>
    </div>
  );
};
export default Component;
