import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="py-12 md:py-20 bg-custom-gradient text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {stats.map((item, index) => (
            <div key={index} className="relative px-6 py-6">
              
              {/* Divider */}
              {index !== stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/30"></span>
              )}

              <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
                {item.value}
              </h2>
              <p className="text-sm md:text-base font-medium opacity-90">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;