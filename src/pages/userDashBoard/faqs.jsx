import React from "react";
import { useState } from "react";
import { obj } from "../../assets/assets";
function Faqs() {
  const [option, setOption] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  return (
    <>
      <div id="faqs" className="mt-8 transition-animate">
        <h1 className="text-2xl font-bold text-gray-600 md:text-4xl">
          Frequently <br /> Asked Questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6  items-start mt-8">
          <div className="md:col-span-3 space-y-6 text-gray-700">
            <div
              className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
              onClick={() => setOption(!option)}
            >
              <div className="text-gray-500 w-full">
                <p className="mt-0 text-sm">
                  What services can I request from KevTech?
                </p>
                {option ? (
                  <div className="p-4 w-full">
                    <p className="text-primary">
                      {" "}
                      KevTech allows you to request custom solutions like
                      websites, e-commerce platforms, mobile apps, and
                      point-of-sale (POS) systems tailored to your business or
                      personal needs.
                    </p>
                  </div>
                ) : null}
              </div>

              {option ? (
                <img className="mt-1" src={obj.optionOpen} alt="" />
              ) : (
                <img className="mt-1" src={obj.optionClosed} alt="" />
              )}
            </div>
            {/* 2 */}
            <div
              className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
              onClick={() => setOption1(!option1)}
            >
              <div className="text-gray-500 w-full">
                <p className="mt-0 text-sm">
                  How long does it take to complete a project?
                </p>
                {option1 ? (
                  <div className="p-4 w-full">
                    <p className="text-primary">
                      Project timelines vary based on complexity. Simple
                      websites may take 3–5 days, while advanced apps or systems
                      can take 1–3 weeks. You’ll receive an estimated delivery
                      time after submitting your request.
                    </p>
                  </div>
                ) : null}
              </div>

              {option1 ? (
                <img className="mt-1" src={obj.optionOpen} alt="" />
              ) : (
                <img className="mt-1" src={obj.optionClosed} alt="" />
              )}
            </div>
            {/* 3 */}
            <div
              className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
              onClick={() => setOption2(!option2)}
            >
              <div className="text-gray-500 w-full">
                <p className="mt-0">
                  Can I request changes after submitting my project?
                </p>
                {option2 ? (
                  <div className="p-4 w-full">
                    <p className="text-primary">
                      Yes! You can request revisions or updates during the
                      development phase. We’ll keep you in the loop throughout
                      the process to ensure your vision is fully realized.
                    </p>
                  </div>
                ) : null}
              </div>

              {option2 ? (
                <img className="mt-1" src={obj.optionOpen} alt="" />
              ) : (
                <img className="mt-1" src={obj.optionClosed} alt="" />
              )}
            </div>
            {/* 4 */}
            <div
              className="border p-4 cursor-pointer w-full rounded-sm border-gray-300 flex items-start justify-between"
              onClick={() => setOption3(!option3)}
            >
              <div className="text-gray-500 w-full">
                <p className="mt-0 text-sm">
                  {" "}
                  How do I get started with my first request?
                </p>
                {option3 ? (
                  <div className="p-4 w-full">
                    <p className="text-primary">
                      Just head to your dashboard and click on “New Request”.
                      Select the service type (e.g., Website, App), describe
                      your idea, and we’ll take it from there. You’ll be
                      contacted shortly after submission.
                    </p>
                  </div>
                ) : null}
              </div>

              {option3 ? (
                <img className="mt-1" src={obj.optionOpen} alt="" />
              ) : (
                <img className="mt-1" src={obj.optionClosed} alt="" />
              )}
            </div>
            {/* end */}
          </div>

          {/* 40% width = 2 out of 5 columns */}
          <div className="md:col-span-2 text-gray-700 border-1 border-gray-100 p-8 shadow-sm roundes-sm text-center">
            <img className="mx-auto mb-4" src={obj.message} alt="" />
            <h1 className=" text-2xl font-bold text-gray-700">
              Do you have more questions?
            </h1>
            <p className="text-gray-400 mt-8 text-sm">
              Let us know whether you had a more specific question to us.Reach
              out to KEVTECH through the emailing us directly & expect feedback
              within 48 working hours
            </p>
            <button className="bg-primary mt-8 p-2 text-center w-full text-white rounded-sm">
              <a href=" https://mail.google.com/mail/u/0/#inbox"> Send Email</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
