const Component = ({ color }) => {
  return (
    <div
      className={`border-black border-2 font-bold rounded-full py-2 px-6 bg-${color}-100`}
    >
      <span>Adress</span>
      <span>Variation</span>
      <span>Amount</span>
    </div>
  );
};
export default Component;
