import React from "react";
import CountUp from "react-countup";
import { obj } from "../assets/assets";
function About() {
  return (
    <div id="about" className=" mt-16">
      <h1 className="flex gap-3 items-end  text-gray-600 mb-10 font-bold h-4 text-2xl  md:text-3xl">
        About
        <img className="h-8" src={obj.logo} alt="" />
      </h1>
      <div className="md:flex gap-5 overflow-hidden">
        <img className="w-[400px] md:w-[450px]" src={obj.newabout} alt="" />
        <div>
          <div className=" mt-10 mb-10 flex gap-3 md:gap-10">
            <div>
              <div className="text-primary text-2xl font-bold md:text-3xl">
                <CountUp className="ml-2" end={20} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Projects</h1>
            </div>
            <div>
              <div className="text-primary text-2xl font-bold  md:text-3xl">
                <CountUp className="ml-2" end={5} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Awards</h1>
            </div>
            <div>
              <div className="text-primary text-2xl font-bold md:text-3xl">
                <CountUp className="ml-2" end={10} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Pending</h1>
            </div>
            <div>
              <div className="text-primary text-2xl font-bold md:text-3xl">
                <CountUp className="ml-2" end={15} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Refferals</h1>
            </div>
          </div>
          <p className="text-gray-400">
            KevTech empowers business growth through strategic, scalable digital
            solutions-infusing every project with creativity, clear goals, and
            lasting impact.
          </p>
        </div>
      </div>
      {/* more */}
      <div className="w-full mt-10 bg-primary  relative h-[550px] md:h-[420px] rounded-sm p-4">
        {/* left section */}
        <div>
          <h1 className="font-bold text-2xl md:text-3xl max-w-[600px] mb-[20px]  leading-tight text-white">
            Did you know KevTech is offering free services for the first 10
            clients?
          </h1>
          <p className="text-gray-200 text-sm mb-4">
            click free trial and enjoy free service in web development{" "}
          </p>
          <div className="relative">
            <button className="p-1  bg-gray-100 text-black shadow shadow-gray-800 hover:scale-104 transition rounded-sm">
              Get Started
            </button>
            <img className="absolute mb-[-25px]" src={obj.whiteArrow} alt="" />
          </div>
        </div>
        <img
          className="absolute bottom-0 h-[270px] md:h-[300px] lg:h-[350px] right-0"
          src={obj.about}
          alt=""
        />
      </div>
      {/* gallery */}
      <div className="bg-indigo-50 mt-10 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Build better
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Every work done to perfection
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    At KevTech, we don’t just talk about results we build them. 
                    Our gallery showcases real-world projects crafted with
                    purpose, creativity, and precision
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Perfection
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    At KevTech, we believe that quality digital solutions
                    shouldn’t break the bank.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"></p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    packages are designed to give you maximum value without
                    compromising on
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Scalability
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    businesses of all sizes. Whether you're a startup or a
                    growing brand, our
                  </p>
                  <button className="flex mx-auto text-center p-2 bg-primary rounded-sm shadow-gray-100 text-white">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
