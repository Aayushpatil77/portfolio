import { ProjectCardProps } from "@/types";
import Image from "next/image";

import redirect_arrow from "@/public/assets/icons/redirect_arrow.svg";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  link,
  className
}: ProjectCardProps) => {
  return (
    <article className={`max-md:mb-16 mb-10 max-md:w-[270px] w-[350px] bg-zinc-800 flex items-center justify-center p-3 rounded-[30px] shadow-md ${className}`}>
      <div className="flex flex-col relative text-neutral-50">
        <a href={link} target="_blank">
          <div className="bg-sky-500 max-md:w-10 max-md:h-10 w-12 h-12 absolute right-0 rounded-full shadow-md flex items-center justify-center cursor-pointer">
            <Image
              src={redirect_arrow}
              alt="redirect arrow"
              width="0"
              height="0"
              sizes="100vw"
              className="w-4 h-4"
            />
          </div>
        </a>
        <Image
          src={imgSrc}
          alt={title}
          width={320}
          height={320}
          className="rounded-[30px]"
        />
        <div className="flex flex-col p-3">
          <h4 className="max-md:text-lg text-xl font-bold">{title}</h4>
          <p className="max-md:text-sm">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
