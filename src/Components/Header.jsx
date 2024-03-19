
import { IoIosSearch } from "react-icons/io";
// import Frame from '../assets/image/Frame 5.png'
export default function Header() {
  return (
    <div className="xl:w-8/12 mx-auto my-3 xl:px-0 px-5">
      <div className="flex items-center justify-between">
        <h2 className="sm:text-2xl text-xl font-bold">Recipe Calories</h2>
       <nav className="lg:block hidden">
       <ul className="flex gap-5 text-base text-[#150B2BB3]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Search</a></li>
        </ul>
       </nav>
       <div className="flex items-center gap-6">
       <div className="relative sm:block hidden">  
        <input className="bg-gray-100 pl-10 pr-3 py-2 outline-none rounded-full relative"  type="text" placeholder="Search" />
        <a className="text-xl absolute  left-3 top-2.5" href=""><IoIosSearch /></a>
       </div>
       <img className="sm:w-auto w-10" src='/assets/image/Frame 5.png' alt="" />
       </div>
      </div>
    </div>
  )
}