import React from "react";
import userImage from "../assets/picture/user.png";
import packageImage from "../assets/picture/package.png";
import rocketImage from "../assets/picture/rocket.png";

const getStartedContent = [
  {
    id: 1,
    img: userImage,
    title: "Create Account",
    subtitle:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    img: packageImage,
    title: "Choose Products",
    subtitle: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: 3,
    img: rocketImage,
    title: "Start Creating",
    subtitle: "Download and start using your premium tools immediately.",
  },
];

const GetStarted = () => {
  return (
    <section className="bg-[#f9fafc] py-10 pb-28" id="features">
      {/* Container instead of Wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header replacement */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-500 mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {getStartedContent.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-purple-500 min-h-[260px] justify-center relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f4e8fe] flex items-center justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <h4 className="font-bold text-xl md:text-2xl mb-2">
                {item.title}
              </h4>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {item.subtitle}
              </p>

              <span className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-500 flex items-center justify-center text-white rounded-full absolute top-4 right-4">
                {item.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;