const Current = ({ current,index }) => {
    //   console.log(current, "click");
    return (
      <div className="flex justify-between px-3 py-4 mt-4 bg-gray-100 font-medium">
       <p>{index + 1}</p>
        <p> {current.cook}</p>
        <p> {current.time}</p>
        <p> {current.calories}</p>
    
      </div>
    );
  };
  
  export default Current;