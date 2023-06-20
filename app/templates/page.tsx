import Image from "next/image";

import search_icon from "@/public/assets/icons/search.svg";
import { ProjectCard } from "@/components";

export default function Templates() {
  return (
    <>
      <section className="mt-28">
        <h3 className="text-3xl text-center font-bold">Shop Templates</h3>
      </section>
      <section className="mt-10 w-full">
        <div className="max-sm:mx-6">
          <div className="relative mx-auto max-w-[32rem]">
            <input
              type="text"
              className="max-w-[32rem] w-full text-white font-medium inline bg-zinc-700 h-12 rounded-md pl-3 pr-11 focus:outline-none tracking-wide focus:border-none"
              placeholder="search templates "
            />
            <div className="absolute top-1/2 right-4">
              <Image
                src={search_icon}
                width={0}
                height={0}
                className="w-6 h-auto object-contain -translate-y-1/2"
                alt="search"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28">
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
    </>
  );
}
