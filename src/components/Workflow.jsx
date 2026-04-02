import React from "react";

const Workflow = () => {
  return (
    <section
      className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 md:py-24 text-center px-4 text-white scroll-mt-24"
      id="workflow"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Build a Smarter Workflow 🚀
      </h1>

      <p className="text-sm md:text-base max-w-xl mx-auto">
        Organize your tasks, automate repetitive work, and stay focused on what
        really matters. Our tools help you create an efficient workflow without
        complexity.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <a
          href="#products"
          className="px-5 py-2.5 rounded-full bg-white text-purple-600 font-medium transition hover:-translate-y-1"
        >
          Explore Tools
        </a>

        <a
          href="#pricing"
          className="px-5 py-2.5 rounded-full border border-white font-medium transition hover:bg-white hover:text-purple-600 hover:-translate-y-1"
        >
          View Plans
        </a>
      </div>

      <p className="text-xs md:text-sm mt-6 opacity-80">
        Start free • No hidden fees • Cancel anytime
      </p>
    </section>
  );
};

export default Workflow;