"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ResizablePanel from "./ResizablePanel";

const tabs = [
  { id: "website", label: "website" },
  { id: "app", label: "app" },
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
            className={`transition relative cursor-pointer text-white rounded-full w-36 shadow-sm text-center py-2 font-bold capitalize`}
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
        {active === "website" ? (
          <ServiceCard
            price="$1250"
            previousPrice="$2500"
            features={[
              "Website Creation / Redesign",
              "Professional Branding",
              "Payment Gateway Integration",
              "Optimized for both Laptop and Mobile devices",
              "Image optimization For Fast Loading",
              "Domain connection",
              "Basic SEO",
              "Web Analytics And Pixel Integration",
              "Eye-catching design",
              "Website Legal pages",
              "Contact Form",
            ]}
          />
        ) : (
          <ServiceCard
            price="$2250"
            previousPrice="$3500"
            features={[
              "App Development / Redesign",
              "Professional Branding",
              "Payment Gateway Integration",
              "Optimized for both smartphones and tablets",
              "Image optimization for fast loading",
              "App Store / Play Store submission",
              "Basic SEO for app stores",
              "App Analytics Integration",
              "Eye-catching design",
              "App Legal pages",
              "Contact Form integration",
            ]}
          />
        )}
      </ResizablePanel>
    </>
  );
};

export default Tabs;
