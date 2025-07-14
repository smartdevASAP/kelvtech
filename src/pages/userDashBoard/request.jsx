import React, { useState } from "react";
import { obj } from "../../assets/assets";
import { useAppContext } from "../../context/appContext";

function Request() {
  const [option, setOption] = useState(false);
  const [category, setCategory] = useState(false);
  const [packages, setPackages] = useState(false);
  const [pages, setPages] = useState(false);

  // Context
  const {
    options,
    setOptions,
    categories,
    setCategories,
    pricingPackage,
    setPricingPackage,
    page,
    setPage,
    customRequest,
    setCustomRequest,
  } = useAppContext();

  // Dropdown request handler
  const dropDownHandler = () => {
    if (!options || !categories || !pricingPackage || !page) {
      alert("Please select all options before sending your request!");
      return;
    }
    // console.log("Options:", options);
    // console.log("Categories:", categories);
    // console.log("Package:", pricingPackage);
    // console.log("Pages:", page);
  };

  // Custom request handler
  const customRequestHandler = () => {
    if (!customRequest) {
      alert("Please enter a description for your custom request!");
      return;
    }
    console.log("Custom Request:", customRequest);
    // Example: send custom request to backend here
    setCustomRequest("");
  };

  return (
    <>
      <div id="request" className="mt-8">
        <h3 className="text-2xl font-bold text-gray-600">Make your Request</h3>
        <p className="text-gray-500 text-sm mt-4">
          Don’t wait — your dream project could start now! Tell us what you need
          and we’ll make it happen. Whether it's a custom website, software
          system, or something unique — we're all ears!
        </p>

        {/* OPTIONS MENU */}
        <div className="flex text-sm mt-8 items-start flex-col md:flex-row gap-6">
          {/* Option(s) */}
          <div
            className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
            onClick={() => setOption(!option)}
          >
            <div className="text-gray-500 w-full">
              <p className="mt-0">Option(s)</p>
              {option && (
                <div className="p-4 w-full">
                  <p
                    onClick={() => setOptions("website")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Website
                  </p>
                  <p
                    onClick={() => setOptions("ecommerce")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    E-commerce Website
                  </p>
                </div>
              )}
            </div>
            <img
              className="mt-1"
              src={option ? obj.optionOpen : obj.optionClosed}
              alt=""
            />
          </div>

          {/* Category */}
          <div
            className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
            onClick={() => setCategory(!category)}
          >
            <div className="text-gray-500 w-full">
              <p className="mt-0">Select Category</p>
              {category && (
                <div className="p-4 w-full">
                  <p
                    onClick={() => setCategories("portfolio")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Portfolio Website
                  </p>
                  <p
                    onClick={() => setCategories("business")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Business Website
                  </p>
                  <p
                    onClick={() => setCategories("ecommerce")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    E-commerce Website
                  </p>
                  <p
                    onClick={() => setCategories("non-profit")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Non-profit Website
                  </p>
                </div>
              )}
            </div>
            <img
              className="mt-1"
              src={category ? obj.optionOpen : obj.optionClosed}
              alt=""
            />
          </div>

          {/* Package */}
          <div
            className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
            onClick={() => setPackages(!packages)}
          >
            <div className="text-gray-500 w-full">
              <p className="mt-0">Package</p>
              {packages && (
                <div className="p-4 w-full">
                  <p
                    onClick={() => setPricingPackage("starter")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Starter Package
                  </p>
                  <p
                    onClick={() => setPricingPackage("enterprise")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Enterprise Package
                  </p>
                  <p
                    onClick={() => setPricingPackage("premium")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Premium Package
                  </p>
                  <p
                    onClick={() => setPricingPackage("negotiable")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    Negotiable
                  </p>
                </div>
              )}
            </div>
            <img
              className="mt-1"
              src={packages ? obj.optionOpen : obj.optionClosed}
              alt=""
            />
          </div>

          {/* Pages */}
          <div
            className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
            onClick={() => setPages(!pages)}
          >
            <div className="text-gray-500 w-full">
              <p className="mt-0">Page(s)</p>
              {pages && (
                <div className="p-4 w-full">
                  <p
                    onClick={() => setPage("(1-2) pages")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    (1-2) pages
                  </p>
                  <p
                    onClick={() => setPage("(5-7) pages")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    (5-7) pages
                  </p>
                  <p
                    onClick={() => setPage("(7-10) pages")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    (7-10) pages
                  </p>
                  <p
                    onClick={() => setPage("10+ pages")}
                    className="mb-2 hover:bg-indigo-50 cursor-pointer w-full p-2 rounded"
                  >
                    10+ pages
                  </p>
                </div>
              )}
            </div>
            <img
              className="mt-1"
              src={pages ? obj.optionOpen : obj.optionClosed}
              alt=""
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-start gap-4 md:gap-8">
          <button
            onClick={dropDownHandler}
            className="p-4 cursor-pointer bg-primary rounded-sm text-white shadow-sm"
          >
            Send Request
          </button>
          <button className="p-4 cursor-pointer bg-red-400 rounded-sm text-white border shadow-sm">
            Cancel Request
          </button>
        </div>
      </div>

      {/* Custom request */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:max-w-md">
          <h1 className="text-2xl mb-6 font-bold text-gray-600">
            Or maybe you have a custom request?
          </h1>
          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Email"
              type="email"
            />
            <input
              onChange={(e) => setCustomRequest(e.target.value)}
              value={customRequest}
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Description"
              type="text"
            />
            <button
              onClick={customRequestHandler}
              className="p-4 cursor-pointer bg-primary rounded-sm text-white shadow-sm"
            >
              Send Request
            </button>
          </div>
        </div>
        <img className="w-full md:w-[600px]" src={obj.custom} alt="" />
      </div>
    </>
  );
}

export default Request;
