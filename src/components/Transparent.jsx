import React from "react";
import { Check } from "lucide-react";

/* Dummy Button (since CustomButton removed) */
const Button = ({ children, isPrimary }) => {
  return (
    <button
      className={`w-full py-2 rounded-md font-semibold transition ${
        isPrimary
          ? "bg-white text-black"
          : "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
      }`}
    >
      {children}
    </button>
  );
};

/* Static Data */
const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: { amount: 0, currency: "$", period: "Month" },
    most_popular: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: { label: "Get Started Free" },
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: { amount: 29, currency: "$", period: "Month" },
    most_popular: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    cta: { label: "Start Pro Trial" },
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: { amount: 99, currency: "$", period: "Month" },
    most_popular: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    cta: { label: "Contact Sales" },
  },
];

/* Card */
const PricingCard = ({ item }) => {
  const isPopular = item.most_popular;

  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col justify-between shadow min-h-[380px]
      ${isPopular ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white" : "bg-[#f9fafc]"}
      hover:-translate-y-1 transition`}
    >
      <div>
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

        <p className={`${isPopular ? "text-white/80" : "text-gray-500"} mb-4`}>
          {item.tagline}
        </p>

        <p className="mb-4">
          <span className="text-3xl font-bold">
            {item.price.currency}
            {item.price.amount}
          </span>{" "}
          /{item.price.period}
        </p>

        <ul className="space-y-2 mb-6">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check size={16} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Button isPrimary={isPopular}>{item.cta.label}</Button>

      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 px-3 py-1 text-xs rounded-full">
          Most Popular
        </span>
      )}
    </div>
  );
};

/* Main Section */
const PricingSection = () => {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple & Flexible Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Pick a plan that works best for you.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} item={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;