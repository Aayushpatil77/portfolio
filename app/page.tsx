import Image from "next/image";
import arrow_long from "@/public/assets/icons/arrow_long.svg";
import { ProjectCard, Tabs, WorkflowCard } from "@/components";

export default function Home() {
  return (
    <>
      <main className="mt-28">
        {/* Hero Section */}
        <section className="flex sm:w-full justify-between max-lg:justify-center items-center">
          <div>
            <h1 className="text-5xl max-lg:text-4xl max-sm:text-3xl max-lg:text-center max-sm:text-center font-bold leading-tight animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Crafting designs that are <br className="max-sm:hidden" /> both
              functional and <br className="max-sm:hidden" /> beautiful
            </h1>
            <a href="#services" className="group">
              <div className="flex font-normal gap-2 mt-7 items-center max-lg:justify-center transition-all ease-in-out">
                <h6 className="max-lg:text-center max-sm:text-lg text-xl">
                  Start Crafting{" "}
                </h6>
                <Image
                  src={arrow_long}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="translate-y-1 w-7 h-auto transition group-hover:translate-x-1"
                  alt="long-arrow"
                />
              </div>
            </a>
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
        <section className="mt-28 scroll-mt-3" id="services">
          <h2 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-tight text-zinc-300">
            Customizable Services
          </h2>

          <Tabs />
        </section>
      </main>
    </>
  );
}
