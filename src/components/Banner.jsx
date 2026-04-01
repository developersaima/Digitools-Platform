import { Play } from "lucide-react";
import Banner_IMAGE from "../assets/picture/banner.png";

const Banner = () => {
  const features = [
    "AI tools",
    "Design assets",
    "Templates",
    "Productivity software",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-4">
        
        {/* Left */}
        <div className="space-y-6">
          
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full w-fit bg-indigo-100">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-gradient-to-r from-purple-600 to-pink-500"></span>
            <p className="text-sm font-semibold text-purple-600">
              New: AI-Powered Tools Available
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Supercharge Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Digital Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Access premium{" "}
            {features.map((item, i) => (
              <span key={i} className="font-medium text-gray-700">
                {item}
                {i < features.length - 1 && ", "}
              </span>
            ))}
            —all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            
            {/* Explore Button */}
            <button className="px-6 py-3 rounded-full text-white font-semibold 
            bg-gradient-to-r from-purple-600 to-indigo-500 
            hover:from-purple-700 hover:to-indigo-600 
            transition-all duration-300">
              Explore Products
            </button>

            {/* Watch Demo Button */}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full 
            border-2 border-purple-500 text-purple-600 font-semibold 
            hover:bg-purple-500 hover:text-white 
            transition-all duration-300">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Banner_IMAGE}
            alt="Banner"
            className="w-full max-w-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;