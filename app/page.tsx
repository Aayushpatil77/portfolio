"use client";
import Image from "next/image";
import arrow_long from "@/public/assets/icons/arrow_long.svg";
import { ProjectCard, ServiceCard, WorkflowCard } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "website", label: "website" },
  { id: "app", label: "app" },
];

export default function Home() {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <>
      <main className="mt-28">
        {/* Hero Section */}
        <section className="flex sm:w-full justify-between max-lg:justify-center items-center">
          <div>
            <h1 className="text-5xl max-lg:text-4xl max-sm:text-3xl max-lg:text-center max-sm:text-center font-bold leading-tight animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Crafting designs that are <br /> both functional and <br />{" "}
              beautiful
            </h1>
            <div className="flex font-normal gap-2 mt-7 items-center max-lg:justify-center">
              <h6 className="max-lg:text-center lg:text-xl">Start Crafting </h6>
              <Image
                src={arrow_long}
                width="0"
                height="0"
                sizes="100vw"
                className="w-7 h-auto"
                alt="long-arrow"
              />
            </div>
          </div>
          <div className="w-[500px] h-[400px] rounded-lg bg-zinc-700 block max-lg:hidden"></div>
        </section>

        {/* Project Section */}

        <section className="mt-28">
          <h2 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-tight text-zinc-300">
            Completed Projects
          </h2>
          <div className="grid lg:grid-cols-12 md:grid-cols-6 justify-items-center w-full mt-20">
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3"
            />
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3 lg:col-span-6"
            />
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3"
            />
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3"
            />
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3 lg:col-span-6"
            />
            <ProjectCard
              title="FitTrack"
              description="FitTrack is a fitness app that tracks workouts, logs meals and calories, and offers personalized recommendations based on goals and fitness level."
              imgSrc="https://placehold.co/320x320"
              link="https://example.com"
              className="col-span-3"
            />
          </div>
        </section>

        {/* Workflow section */}
        <section className="mt-28">
          <h2 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-tight text-zinc-300">
            My Workflow
          </h2>

          <div className="mt-20 border border-dashed min-w-full">
            <div className="flex flex-col items-center gap-10 p-10">
              <WorkflowCard
                heading="1. Requirements"
                subHeading="We'll make sure I have everything needed to complete your project."
              />
              <WorkflowCard
                heading="2. Development"
                subHeading="I'll develop the project and deliver a working product for your review.​"
              />
              <WorkflowCard
                heading="3. Modifications"
                subHeading="I'll modify assets or content based on your feedback."
              />
              <WorkflowCard
                heading="4. Delivery"
                subHeading="I'll send you the final delivery for review and feedback."
              />
              <WorkflowCard
                heading="5. Follow ups"
                subHeading="I'll send you the final delivery for review and feedback."
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-28">
          <h2 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-tight text-zinc-300">
            Customizable Services
          </h2>

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
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}

                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="">
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
          </div>
        </section>
      </main>
    </>
  );
}
