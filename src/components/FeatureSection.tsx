
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/f87f71ec2200d80da0fe34c824be775d28656ce5?placeholderIfAbsent=true",
      title: "Create A New Crypto Wallet",
      description:
        "You will need it to seperate your earnings from the rest of your digital assets",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/4482f0f35a7910ea659f62590b078e9c6ab71cfe?placeholderIfAbsent=true",
      title: "Load Your New Wallet",
      description:
        "Load $21 worth of ETH to your new wallet to enter the Doompocalypse",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/329b4b0a99175b72e7c2895ec9d7e9389ac5229a?placeholderIfAbsent=true",
      title: "Download Game",
      description:
        "Enter The Doompocalypse Metaverse",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/517d34b9d3bc60a1210abdb6d73aed130b21e9a1?placeholderIfAbsent=true",
      title: "Gather some courage",
      description:
        "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    },
  ];

  return (
    <section className="flex flex-col items-start px-20 mt-5 w-full max-md:px-5 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
        Play. Earn. Repeat
      </h2>
      <p className="mt-8 text-lg leading-none text-white">
        The Future of Gaming is Here
      </p>
      <div className="self-stretch mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature) => (
            <div key={feature.id} className="w-3/12 max-md:ml-0 max-md:w-full">
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
