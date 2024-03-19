import { useState } from "react";
import "./App.css";
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import RecipesSections from "./components/RecipesSections";
import Tables from "./components/Tables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [addCooks, setAddCook] = useState([]);
  const handleWantToCook = (cook, time, calories) => {
    const details = {
      cook: cook,
      time: time,
      calories: calories,
    };

    const isAlreadyExcess = addCooks.find((item) => item.cook === cook);
    if (isAlreadyExcess) {
      toast.error("Cannot select more than one");
    } else {
      const newAddTo = [...addCooks, details];
      setAddCook(newAddTo);
    }
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <BannerSection></BannerSection>

      <div className="xl:w-8/12 mx-auto  xl:px-0 px-5 my-14">
        <div className="text-center">
          <h3 className="lg:text-3xl text-xl font-semibold text-[#150B2B]">
            Our Recipes
          </h3>
          <p className="text-[#150B2B99] mt-3 lg:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget
            <span className="block">
              urna volutpat curabitur elementum mauris aenean neque.
            </span>
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col xl:w-8/12 mx-auto  xl:px-0 px-5 gap-8">
        <RecipesSections handleWantToCook={handleWantToCook}></RecipesSections>
        <Tables addCooks={addCooks}></Tables>
      </div>
    </>
  );
}

export default App;

