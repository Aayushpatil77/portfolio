import { ServiceCardProps } from "@/types";

const ServiceCard = ({
  price,
  previousPrice,
  features,
  className,
}: ServiceCardProps) => {
  return (
    <>
      <div
        className={`${className} py-5 mx-auto px-10 rounded-xl flex items-center bg-zinc-700 justify-center`}
      >
        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-2xl line-through font-bold">{previousPrice}</h4>
            <h4 className="text-4xl font-bold">{price}</h4>
          </div>
          <div>
            <ol className="list-decimal">
              {features.map((feature, indx) => (
                <li key={indx}>{feature}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
