
import { useState } from "react";
import CurrentlyCooking from "./CurrentlyCooking";
import Table from "./Table";

export default function Tables({ addCooks }) {
  
  const [currently,setCurrently] = useState([])
  const currentlyCooking = (addCook) => {
    const newCurrently = [...currently,addCook]
    setCurrently(newCurrently)
   


  
  };
  // const handleremove = id =>{
  //   const newCarts = currently.filter(addCook => addCook.id != id)
  //   console.log(newCarts)
  // }

  return (
   
    <div className="lg:w-5/12 bg-gray-50 py-6 rounded-2xl lg:h-[670px] lg:mb-0 mb-10">
      <div className="text-center font-medium  text-xl">
        Want to cook : {addCooks.length}
      </div>
      <div className="px-10 py-3">
        <hr />
      </div>
      <div className="flex justify-between px-10 font-medium text-gray-500">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      </div>
      <div className="bg-gray-100 mt-5 ">
        {addCooks.map((addCook, index) => (
          <Table
            key={index}
            addCook={addCook}
            index={index}
            currentlyCooking={currentlyCooking}
          />
        ))}
      </div>
      <CurrentlyCooking currently={currently}></CurrentlyCooking>
    </div>
  );
}
