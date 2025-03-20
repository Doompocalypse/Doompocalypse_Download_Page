import React from "react";

const HeroSection = () => {
  return (
    <section className="flex overflow-hidden relative flex-col w-full min-h-[780px] pt-[475px] max-md:pt-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/4a731cae3a94e7747985b66966166d65c2ecd97a?placeholderIfAbsent=true"
        alt="Doompocalypse Game Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between px-7 py-6 w-full bg-black rounded-3xl border border-solid border-zinc-500 border-opacity-70 max-w-[1260px] shadow-[0px_0px_33px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col my-auto text-white max-md:max-w-full">
            <h1 className="text-4xl font-black leading-none uppercase max-md:max-w-full">
              Play Doompocalypse
            </h1>
            <p className="self-start mt-8 text-2xl leading-none">
              Play on PC with the Epic Games Store.
            </p>
          </div>
          <div className="text-center">
            <div className="px-8 py-3.5 bg-white rounded-xl text-stone-950 max-md:px-5">
              <p className="text-xs leading-none">
                get it on the epic games store
              </p>
              <p className="mt-2 text-xl font-bold tracking-tight leading-none">
                DOWNLOAD NOW
              </p>
            </div>
            <button className="px-9 py-3 mt-2.5 text-base font-bold leading-none text-white uppercase rounded-lg bg-white bg-opacity-30 max-md:px-5">
              more ways to play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
