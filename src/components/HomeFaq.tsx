"use client";
import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What services does Bright Fibre Cleaning offer?",
    description:
      "We provide professional cleaning services for homes and businesses, including carpet cleaning, upholstery cleaning, deep cleaning, and regular maintenance cleaning.",
  },
  {
    id: 2,
    title: "How do I book a cleaning appointment?",
    description:
      "You can easily book an appointment through our website or by calling our customer service. Choose your preferred date and time, and we’ll handle the rest.",
  },
  {
    id: 3,
    title: "Are your cleaning products safe for children and pets?",
    description:
      "Yes, we use eco-friendly and non-toxic cleaning products that are safe for both children and pets.",
  },
  {
    id: 4,
    title: "Do I need to be home during the cleaning?",
    description:
      "No, you don’t need to be home. Our trusted professionals can clean your space while you’re away, as long as we have access.",
  },
  {
    id: 5,
    title: "How much does a cleaning service cost?",
    description:
      "Pricing depends on the size of your space and the type of cleaning required. Contact us for a free quote tailored to your needs.",
  },
];

const HomeFaq = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  interface AccordionItem {
    id: number;
    title: string;
    description: string;
  }

  const toggleAccordion = (id: number): void => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full container mx-auto space-y-3">
      {accordionData.map((item) => (
        <div key={item.id} className="border-b border-gray-300">
          <div
            onClick={() => toggleAccordion(item.id)}
            className="flex items-center justify-between  py-4 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {/* <span className="text-gray-500 font-semibold">{`0${item.id}`}</span> */}
              <p className="capitalize text-base font-semibold">{item.title}</p>
            </div>
            <span>
              {activeId === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_126_264)">
                    <path
                      d="M12 1.5V22.5M1.5 12H22.5"
                      stroke="#121212"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_126_264">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </span>
          </div>
          {activeId === item.id && item.description && (
            <div className="p-4 pt-0 opacity-80 text-sm md:w-3/4 leading-relaxed">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeFaq;
