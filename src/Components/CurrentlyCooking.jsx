import Current from "./Current";

const CurrentlyCooking = ({ currently }) => {
  return (
    <div>
      <div className="text-center font-medium  text-xl mt-10">
        Currently cooking: {currently.length}
      </div>
      <div className="px-10 py-3">
        <hr />
      </div>
      <div className="flex justify-between px-10 font-medium text-gray-500">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      </div>
      {currently.map((current, index) => (
        <Current current={current} index={index} key={index}></Current>
      ))}
    </div>
  );
};

export default CurrentlyCooking;
