import React from "react";
import CountUp from "react-countup";
import { obj } from "../assets/assets";
function About() {
  return (
    <div id="about" className=" mt-16">
      <h1 className="flex gap-3 items-end  text-gray-600 mb-10 font-bold h-4 text-2xl  md:text-3xl">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[40%_1px_1fr] gap-6 items-start">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center bg-primary rounded-sm shadow-sm p-4 justify-center text-center">
            <div>
              <h1 className="text-3xl text-white font-bold">
                <CountUp end={10} duration={5} />+
              </h1>
              <p className="text-white">Projects</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100  p-4  rounded-sm shadow-sm justify-center text-center">
            <div>
              <h1 className="text-3xl text-gray-600 font-bold">
                <CountUp end={10} duration={5} />+
              </h1>
              <p className="text-gray-500">Clients</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100  p-4 rounded-sm shadow-sm justify-center text-center">
            <div>
              <h1 className="text-3xl text-gray-600 font-bold">
                <CountUp end={5} duration={5} />+
              </h1>
              <p className="text-gray-500">Pending</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100  p-4 rounded-sm shadow-sm justify-center text-center">
            <div>
              <h1 className="text-3xl text-gray-600 font-bold">
                <CountUp end={2} duration={5} />
              </h1>
              <p className="text-gray-500">Awards</p>
            </div>
          </div>
        </div>

        {/* Middle vertical line */}
        <div className="bg-gray-100 w-full h-full" />
        {/* Right section (remaining 40%) */}
        <div>
          <p className="text-gray-500 mb-8">
            At KevTech, we turn ideas into digital realities. We're a creative
            tech studio focused on building custom websites, apps, and business
            systems that not only look good — but work beautifully. Whether
            you're a startup, a brand, or just starting out with a vision,
            KevTech is your go-to partner for clean, functional, and scalable
            digital solutions. We don't do one-size-fits-all. Every build is
            tailored, every project treated with purpose. Simple. Smart. Built
            for growth — that's KevTech.
          </p>
          <button className="md:p-3 w-full text-center p-2 bg-primary text-white shadow-sm">
            <a href="#services"> Learn more</a>
          </button>
        </div>
      </div>
      {/* more */}
      <div className="p-4 mt-16 bg-indigo-100 rounded-sm md:mt-24 ">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-2 text-gray-600 md:text-3xl">
            Why Choose Us
          </h1>
          <small className="text-gray-500 mb-4 text-sm">
            We believe to offer cutting-edge skills in all our projects
          </small>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-center text-gray-700">
          {/* Card 1 */}
          <div className="p-6 bg-indigo-50 rounded-xl flex flex-col items-center">
            <img className="mx-auto mb-3" src={obj.fast} alt="Fast Icon" />
            <h1 className="text-lg font-bold mt-2 mb-2">Fast Building</h1>
            <p className="text-sm text-gray-600">
              At KevTech, we prioritize speed without compromising quality. Our
              fast-building process ensures your website, app, or system is
              delivered quickly and efficiently — so you can focus on growth,
              not delays.
            </p>
            <button className="font-semibold mt-6 p-2 text-white bg-primary w-full rounded-sm">
              <a href="#services"> Learn more</a>
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-indigo-50 rounded-xl flex flex-col items-center">
            <img
              className="mx-auto mb-3"
              src={obj.responsive}
              alt="Fast Icon"
            />
            <h1 className="text-lg font-bold mt-2 mb-2">Responsive Design</h1>
            <p className="text-sm text-gray-600">
              Every product we build at KevTech is designed to look and function
              perfectly across all devices — from desktops to tablets and
              smartphones. We ensure your users enjoy a seamless experience no
              matter where they are.
            </p>
            <button className="font-semibold mt-6 p-2 text-white bg-primary w-full rounded-sm">
              <a href="#services"> Learn more</a>
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-indigo-50 rounded-xl flex flex-col items-center">
            <img className="mx-auto mb-3" src={obj.support} alt="Fast Icon" />
            <h1 className="text-lg font-bold mt-2 mb-2">Continous Support</h1>
            <p className="text-sm text-gray-600">
              At KevTech, our work doesn’t stop after launch. We provide ongoing
              support to ensure everything runs smoothly. Whether it's updates,
              fixes, or feature improvements — we’re always here when you need
              us.
            </p>
            <button className="font-semibold mt-6 p-2 text-white bg-primary w-full rounded-sm">
              <a href="#services"> Learn more</a>
            </button>
          </div>
        </div>
      </div>
      {/*end more */}
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
