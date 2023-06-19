import { WorkflowCardProps } from "@/types";

const WorkflowCard = ({ heading, subHeading }: WorkflowCardProps) => {
  return (
    <>
      <div className="px-12 py-4 flex justify-center break-words lg:w-2/3 w-full rounded-3xl mx-auto flex-col bg-zinc-700">
        <article className="ml-14">
          <h3 className="text-2xl font-bold">{heading}</h3>
          <p className="mt-1 text-base text-wrap">{subHeading}</p>
        </article>
      </div>
    </>
  );
};

export default WorkflowCard;
