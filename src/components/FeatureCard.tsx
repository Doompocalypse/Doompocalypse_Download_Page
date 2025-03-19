import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <article className="grow pb-6 w-full text-white rounded-3xl bg-white bg-opacity-10 shadow-[0px_5px_15px_rgba(0,0,0,0.29)] max-md:mt-6">
      <img
        src={image}
        alt={title}
        className="object-contain overflow-hidden w-full rounded-3xl aspect-square"
      />
      <div className="flex flex-col px-5 mt-6">
        <h3 className="self-start text-xl font-bold leading-none">{title}</h3>
        <p className="mt-4 text-lg leading-7">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
