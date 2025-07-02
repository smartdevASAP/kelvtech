import React, { useEffect } from "react";
import { obj, sideBar } from "../assets/assets";
import { useAppContext } from "../context/appContext";
function NavBar() {
  const { isMenuToggled, setIsMenuToggled } = useAppContext();

  //runs everytime the component mounts
  useEffect(() => {
    setIsMenuToggled(isMenuToggled);
  }, []);
  //handle the menu onclick attribute;
  const setMenuStatus = () => {
    setIsMenuToggled(!isMenuToggled);
    console.log(isMenuToggled);
  };

  return (
    <>
      <div className=" flex justify-between relative items-end w-[90vw] mx-auto">
        <img className="h-6 mt-4" src={obj.logo} alt="" />
        <div>
          <ul className="hidden md:flex gap-12 items-end md:text-sm">
            <a href="#home" className={`cursor-pointer`}>
              Home
            </a>
            <a href="#about" className={`cursor-pointer`}>
              About
            </a>
            <a href="#services" className={`cursor-pointer`}>
              Services
            </a>
            <a href="#pricing" className={`cursor-pointer`}>
              Pricing
            </a>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 bg-primary text-white text-sm shadow-sm hidden sm:block ">
            Get Started
          </button>
        </div>
      </div>
      {/* icon */}
      <img
        onClick={() => setMenuStatus()}
        className="sm:hidden absolute top-4.5 right-5 text-sm "
        src={obj.menu}
        alt=""
      />
      {/* conditional renedering
      Mobile menu option */}
      {isMenuToggled && (
        <>
          <div
            className={`fixed top-0 right-0 h-full w-[250px] p-4 bg-indigo-100 rounded-sm shadow-sm shadow-gray-400 z-[9999] transform transition-transform duration-300 ease-in-out ${
              isMenuToggled ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex  justify-between items-center">
              <div />

              <img
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="h-6"
                src={sideBar.close}
                alt=""
              />
            </div>
            <div className="border-b mb-3 border-gray-300 h-1" />

            <div className="p-2  mb-2 flex justify-between items-center align-middle">
              <a href="#home" className="text-gray-600 text-sm/2">
                Home
              </a>
              <img src={sideBar.homeICON} alt="" />
            </div>
            <div className="p-2 mb-2  flex justify-between items-center align-middle">
              <a href="#about" className="text-gray-600 text-sm/2">
                About
              </a>
              <img src={sideBar.aboutICON} alt="" />
            </div>
            <div className="p-2 mb-2  flex justify-between items-center align-middle">
              <a href="#services" className="text-gray-600 text-sm/2">
                Services
              </a>
              <img src={sideBar.servicesICON} alt="" />
            </div>
            <div className="p-2 mb-2  flex justify-between items-center align-middle">
              <a href="#pricing" className="text-gray-600 text-sm/2">
                Pricing
              </a>
              <img src={sideBar.pricingICON} alt="" />
            </div>
            <div className="border-b border-gray-300 h-1" />
            <button className="px-4 mt-4 w-full text-center rounded-sm shadow-gray-50 py-2 bg-primary text-white text-sm shadow-sm ">
              Get Started
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
