import React from "react";
import { obj } from "../assets/assets";
function Pricing() {
  return (
    <div id="pricing" className="mt-16 ">
      <h1 className="text-2xl font-bold text-gray-600 mb-12">Pricing</h1>
      {/* {grid container} */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-5">
        <div className="bg-white p-4 shadow-primary shadow-sm rounded-sm">
          <p className="text-gray-400 mt-4 ">Starter</p>
          <h1 className="font-bold lg:text-3xl mb-2 text-2xl text-primary">
            sh9,999
          </h1>
          <p className="text-gray-700 mb-4 text-xsm">
            The best package for small-scale sized enterprises{" "}
          </p>
          <div className="ml-6 ">
            <small className="flex gap-2 items-center">
              <img src={obj.check} className="h-6" alt="" /> 1–3 Page Custom
              Website
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              Mobile Responsive Design
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              Contact Form Integration
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              Basic SEO Setup
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.check} className="h-6" alt="" /> 1 Week Support
              After Launch  💰 <br />
              Affordable & Fast Setup
            </small>
            <br />
            <button className="w-full p-2 text-white text-center rounded-sm bg-primary">
              Get plan
            </button>
          </div>
        </div>
        <div className="bg-primary text-white p-4 shadow-primary shadow-sm rounded-sm">
          <p className=" text-white mt-4 ">Premium</p>
          <h1 className="font-bold lg:text-3xl mb-2 text-2xl  text-white">
            sh99,999
          </h1>
          <p className=" text-white mb-4 text-xsm">
            Ideal for growing businesses ready to scale digitally.
          </p>
          <div className="ml-6 ">
            <small className="flex gap-2 items-center">
              <img src={obj.checkSec} className="h-6" alt="" />
              5–15 Page Custom Website
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.checkSec} className="h-6" alt="" />
              advanced Mobile Responsive Design
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.checkSec} className="h-6" alt="" />
              E-commerce Functionality (optional)
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.checkSec} className="h-6" alt="" />
              SEO Optimization + Analytics Setup
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.checkSec} className="h-6" alt="" />
              1-Month Free Maintenance
            </small>
            <br />
            <button className="w-full p-2 text-primary text-center rounded-sm bg-white">
              Get plan
            </button>
          </div>
        </div>
        <div className="bg-white p-4 shadow-primary shadow-sm rounded-sm">
          <p className="text-gray-400 mt-4 ">Enterprise</p>
          <h1 className="font-bold lg:text-3xl mb-2 text-2xl text-primary">
            sh39,999
          </h1>
          <p className="text-gray-700 mb-4 text-xsm">
            The best package for small-scale sized enterprises{" "}
          </p>
          <div className="ml-6 ">
            <small className="flex gap-2 items-center">
              <img src={obj.check} className="h-6" alt="" /> Full Website or Web
              App (custom specs)
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              POS / Property / Inventory System
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              Business Email Setup
            </small>
            <br />
            <small className="flex gap-2 items-center">
              {" "}
              <img src={obj.check} className="h-6" alt="" />
              Advanced SEO + Automation Tools
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.check} className="h-6" alt="" />
              API Integrations + Custom Dashboards
            </small>
            <br />
            <small className="flex gap-2 items-center">
              <img src={obj.check} className="h-6" alt="" />3 Months Free
              Support
            </small>
            <br />
            <button className="w-full p-2 text-white text-center rounded-sm bg-primary">
              Get plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
