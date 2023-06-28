import Image from "next/image";
import Link from "next/link";

import { ProjectCard, Tabs, WorkflowCard } from "@/components";
import { workflowCardData } from "@/constants";

import ayush from "@/public/assets/images/ayush.png";
import arrow_long from "@/public/assets/icons/arrow_long.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import gmail from "@/public/assets/icons/gmail.svg";
import linkedin from "@/public/assets/icons/linkedin.svg";
import github from "@/public/assets/icons/github.svg";

export default function Home() {
  return (
    <>
      <main className="mt-28">
        {/* Hero Section */}
        <section className="flex flex-col items-center">
          <h1 className="text-center text-5xl max-lg:text-4xl max-sm:text-3xl max-lg:text-center max-sm:text-center font-bold leading-tight animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Crafting designs that are <br className="max-sm:hidden" /> both functional and beautiful
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
                className="translate-y-1 w-7 h-auto transition duration-150 ease-in-out group-hover:translate-x-1"
                alt="long-arrow"
              />
            </div>
          </a>
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
              {workflowCardData.map((data) => (
                <WorkflowCard
                  key={data.heading}
                  heading={data.heading}
                  subHeading={data.subHeading}
                />
              ))}
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
        {/* Lead Form */}
        <section className="mt-28">
          <div className="flex  justify-center items-center">
            <Link
              target="_blank"
              href="https://bit.ly/3qWbvP4"
              className="focus:border-none transition-all duration-200 ease-in-out focus:outline-none border-dashed border border-white text-2xl px-6 py-1 rounded-md hover:bg-sky-500 hover:border-sky-500 font-medium"
            >
              {"Let's Talk 👋 "}
            </Link>
          </div>
        </section>
        {/* About Section */}
        <section className="mt-28 scroll-mt-4" id="about">
          <div className="flex flex-col gap-3 w-80 mx-auto items-center">
            <Image
              src={ayush}
              className="w-38 h-38 rounded-full bg-zinc-400"
              alt="ayush"
            />
            <div className="flex flex-col gap-1 items-center">
              <h4 className="text-3xl font-medium">Ayush Patil</h4>
              <p className="text-base text-justify">
                I am a 19-year-old website developer and machine learning
                enthusiast, currently studying B.Tech. With a passion for
                crafting captivating digital experiences, I am dedicated to
                pushing the boundaries of innovation. Welcome to my portfolio
                site, where limitless possibilities await.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://github.com/AayushPatil77"
                target="_blank"
                className="rounded-full border border-dashed p-2 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center"
              >
                <Image src={github} alt="github" width={24} height={24} />
              </Link>
              <Link
                href="mailto:ayushpatil77@proton.me"
                target="_blank"
                className="rounded-full border border-dashed p-2 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center"
              >
                <Image src={gmail} alt="gmail" width={24} height={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ayush-patil-b052211b0/"
                target="_blank"
                className="rounded-full border border-dashed p-2 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center"
              >
                <Image src={linkedin} alt="linkedin" width={24} height={24} />
              </Link>
              <Link
                href="https://twitter.com/Ayush_Patil01"
                target="_blank"
                className="rounded-full border border-dashed p-2 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center"
              >
                <Image src={twitter} alt="twitter" width={22} height={22} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
