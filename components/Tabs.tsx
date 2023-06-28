"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ResizablePanel from "./ResizablePanel";

const tabs = [
  { id: "website creation", label: "website creation" },
  { id: "website redesign", label: "website redesign" },
];

const Tabs = () => {
  const [active, setActive] = useState(tabs[0].id);
  return (
    <>
      <div className="mt-16 mb-10 flex gap-2 bg-zinc-800 w-max rounded-full shadow-lg justify-center items-center mx-auto p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`transition relative cursor-pointer text-white rounded-full w-40 shadow-sm text-center py-2.5 px-1 font-bold capitalize`}
          >
            <div className="bg-zinc-700 z-10 inset-0 absolute rounded-full" />
            {active === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="bg-sky-500 z-20 inset-0 absolute rounded-full"
                style={{ borderRadius: "9999" }}
                transition={{ type: "spring", duration: 0.8 }}
              />
            )}

            <span className="relative z-20">{tab.label}</span>
          </button>
        ))}
      </div>
      <ResizablePanel
        animationName="fade"
        duration={0.5}
        containerStyles="flex justify-center items-center"
      >
        {active === "website creation" ? (
          <ServiceCard
            price="30k-40k"
            features={[
              "E-Commerce Functionality",
              "Dashboard",
              "Responsive Design",
              "Domain Integration",
              "Integration of Social Media",
              "User-Friendly Interface",
              "Content Management System (CMS)",
            ]}
          />
        ) : (
          <ServiceCard
            price="25k-30k"
            features={[
              "E-Commerce Functionality",
              "Improved User Experience",
              "Content Organization & Structure",
              "Performance Optimization",
              "Brand Consistency",
              "Integrating New Features",
              "Improved Accessibility",
            ]}
          />
        )}
      </ResizablePanel>
    </>
  );
};

export default Tabs;
