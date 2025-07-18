import React from "react";
import { Link } from "react-router-dom";
function Card({ item }) {
  const { image, content, title } = item;
  return (
    <div id="services" className="mt-16 md:flex md:align-top gap-0">
      <img className=" w-full lg:w-[450px]" src={image} alt="" />
      <div className=" bg-indigo-50/2 p-4 rounded-sm ">
        <div>
          <h1 className="text-gray-600 p-0 md:text-2xl mb-4 font-bold">
            {title}
          </h1>
          <p className="text-gray-500 text-sm lg:text:1xl mb-4 ">{content}</p>
        </div>
        <div className="flex gap-8">
          <Link to="/login">
            <button className="p-2 shadow-sm text-sm shadow-gray-200 rounded-1 bg-primary text-white">
              Get Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Card;
