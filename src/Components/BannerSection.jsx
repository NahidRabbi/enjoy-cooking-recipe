export default function BannerSection() {
  return (
    <div className="xl:w-8/12 mx-auto  xl:px-0 px-5">
      {/* <img src={'/assets/image/rectangle_1.png'} alt="" /> */}
      <div className="bg-[url('/assets/image/rectangle_1.png')] sm:h-[550px] rounded-3xl bg-cover bg-center">
        <div className="flex flex-col items-center text-center sm:py-36 py-20 text-white gap-7 lg:px-0 sm:px-16 px-8">
          <h3 className=" lg:text-4xl  sm:text-2xl text-xl font-bold leading-snug">
            Discover an exceptional cooking{" "}
            <span className="sm:block">class tailo red for you!</span>
          </h3>
          <p className="leading-7 ">
          Viewing cooking videos can offer a range of mental health benefits, 
         as it engages multiple senses<span className="lg:block">provides a creative outlet, and promotes relaxation.</span>
          </p>
          <div className="flex sm:flex-row flex-col items-center sm:gap-4 gap-6">
            <button className="bg-primary hover:bg-secondary  h-11 w-32  text-gray-800 font-semibold rounded-full  ">Explore Now</button>
         
            <button className="border hover:border-none hover:bg-primary hover:text-gray-800 h-11 h w-36 font-semibold rounded-full duration-100 delay-100">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
