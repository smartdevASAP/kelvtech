import React from "react";
import { obj } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
function UserHome() {
  const { username } = useAppContext();
  return (
    <>
      <div className="mt-8 border-b-2 border-gray-100 space-y-6 md:flex align-top justify-between p-4">
        <div>
          <h1 className="text-4xl mb-8 text-gray-600 font-bold">
            <span className="text-primary leading-18"> Welcome </span> Back!!{" "}
            <br /> {username}
          </h1>
          <div className="max-w-[450px]">
            <p className="text-gray-600 text-sm">
              Your creative tech space is here. Browse your past projects,
              request new custom builds, and explore tools tailored just for you
              all in one place.
            </p>
            <div className="mt-10 flex gap-6">
              <button className=" bg-primary text-white pt-2 pb-2 pr-4 pl-4">
                <a href="#request"> Make Request</a>
              </button>
              <button className=" bg-white text-gray-600 pt-2 pb-2  border-2 border-gray-500 pr-4 pl-4">
                <a href="#faqs"> FAQs</a>
              </button>
            </div>
          </div>
        </div>
        <img className=" md:order-2 h-96" src={obj.userHome} alt="" />
      </div>
    </>
  );
}

export default UserHome;
