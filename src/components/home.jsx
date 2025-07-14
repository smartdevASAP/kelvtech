import React from "react";
import { obj } from "../assets/assets";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      id="home"
      className="relative overflow-x-hidden border-b-2 border-gray-100 pb-12"
    >
      {/* Top right GIF */}
      <img
        className="
          absolute 
          left-1/2 top-40 -translate-x-1/2 -translate-y-1/2 h-[250px] 
          md:left-auto md:right-0 md:top-0 md:translate-x-0 md:translate-y-0
        "
        src={obj.GIF}
        alt=""
      />

      {/* Decorative Clip */}
      <img
        className="absolute top-20 left-10 w-[100px]"
        src={obj.clip}
        alt=""
      />

      {/* Text & CTA */}
      <div className=" mt-80 md:mt-0">
        <h1 className="mx-auto md:w-[450px] w-[200px] text-center text-2xl md:text-4xl mt-16 text-gray-700 font-bold">
          Elevate your business to the next level.
        </h1>

        <p className="md:w-[400px] w-[250px] text-center text-gray-600 mx-auto text-sm mt-5">
          We create custom websites & systems to boost your growth.
        </p>

        <div className="relative mx-auto w-[250px] md:w-[300px] flex justify-between mt-16">
          <div className="relative">
            <img
              className="absolute top-[-50px] left-[-15px] w-[80px]"
              src={obj.arrow}
              alt=""
            />
            <button className="p-2 md:p-3 rounded-sm flex  items-center gap-3 bg-primary text-white rounded-xsm">
              <img src={obj.rocket} alt="" />
              <Link to="/login">Get Started</Link>
            </button>
          </div>

          <button className="border rounded-sm text-gray-600 border-indigo-200 p-2 text-sm md:p-3">
            <a href="#pricing"> Explore More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
