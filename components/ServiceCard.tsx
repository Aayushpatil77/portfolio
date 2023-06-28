import { ServiceCardProps } from "@/types";
import Image from "next/image";
import pointers from '@/public/assets/icons/pointers.svg';

const ServiceCard = ({
  price,
  features,
  className,
}: ServiceCardProps) => {
  return (
    <>
      <div
        className={`${className} py-5 mx-auto px-10 rounded-xl flex items-center bg-zinc-700 justify-center`}
      >
        <div>
            <h4 className="text-3xl font-bold my-2 mb-4 text-center">{price}</h4>
          <div>
            <ul className="flex flex-col gap-2">
              {features.map((feature, indx) => (
                <li key={indx} className="flex gap-3">
                  <Image src={pointers} alt="pointers" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
