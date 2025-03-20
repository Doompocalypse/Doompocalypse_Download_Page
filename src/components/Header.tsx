
import React from "react";

const Header = () => {
  return (
    <header className="flex z-10 flex-col pt-3 w-full text-base leading-none bg-stone-950 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-center self-center w-full max-w-[1260px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/23b88d3d64f661a31577c69766db588b6cf59f7d?placeholderIfAbsent=true"
          className="object-contain overflow-hidden shrink-0 self-stretch aspect-square w-[99px]"
          alt="Doompocalypse logo"
        />
        <nav className="flex gap-9 self-stretch my-auto text-white max-md:max-w-full">
          <button className="grow">discover</button>
          <button>my library</button>
          <button>create</button>
          <button>crew</button>
          <button>news</button>
          <button>more</button>
        </nav>
        <div className="flex gap-7 items-center self-stretch my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/089c6a6521b1fb6f0382ea382d8add5eb1b6939a?placeholderIfAbsent=true"
            className="object-contain overflow-hidden shrink-0 self-stretch my-auto aspect-square w-[17px]"
            alt="Search icon"
          />
          <div className="shrink-0 self-stretch my-auto w-px h-7 border border-solid border-white border-opacity-40" />
          <div className="flex gap-3 self-stretch">
            <button className="px-8 py-4 text-white rounded-xl border border-solid bg-stone-950 border-stone-950 max-md:px-5">
              sign in
            </button>
            <button className="px-9 py-5 text-center whitespace-nowrap bg-white rounded-xl text-stone-950 max-md:px-5">
              download
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-2.5 w-full bg-stone-500 min-h-px max-md:max-w-full" />
    </header>
  );
};

export default Header;
