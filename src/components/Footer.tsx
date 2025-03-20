
import React from "react";

const Footer = () => {
  return (
    <footer className="flex overflow-hidden relative flex-col py-16 w-full min-h-[490px] max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/436fca8aae981323de5f9b48ae44a58335ba4bd8?placeholderIfAbsent=true"
        alt="Footer Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col self-center w-full leading-none text-white max-w-[1160px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between mr-7 w-full max-w-[1132px] max-md:mr-2.5 max-md:max-w-full">
          <div>
            <h2 className="text-3xl font-black uppercase max-md:w-full max-md:text-center">
              DOOMPOCALYPSE
            </h2>
            <p className="mt-9 text-lg font-semibold tracking-tight">
              Prepare for the apocalypse in a virtual world.
            </p>
          </div>
          <p className="self-end mt-14 text-lg font-black tracking-tighter max-md:self-center max-md:mt-10 max-md:mb-8 max-md:w-full max-md:text-2xl max-md:text-center">
            THE REVOLUTION IS HERE
          </p>
        </div>
        <p className="self-end mt-5 text-lg font-semibold max-md:self-center max-md:w-full max-md:text-center">
          Want To BETA Test The Game?
        </p>
      </div>
      <div className="relative px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between leading-none max-md:flex-col max-md:gap-12 max-md:items-center max-md:max-w-full max-md:text-center max-sm:gap-10">
          <a
            href="mailto:HQ@DOOMPOCALYPSE.COM"
            className="my-auto text-xl font-black tracking-tight text-white underline"
          >
            HQ@DOOMPOCALYPSE.COM
          </a>
          <div className="flex flex-col font-semibold max-md:w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-5 py-5 w-full text-base tracking-tighter bg-white rounded-xl text-zinc-300 max-md:pr-5 max-md:text-sm"
            />
            <button className="self-start px-10 py-6 mt-3 text-lg tracking-tighter text-center text-white bg-slate-500 rounded-[72px] max-md:self-center max-md:px-5">
              Join The Waitlist
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[842px] max-md:flex-col max-md:gap-10 max-md:items-center max-md:text-center max-sm:gap-8">
          <div className="flex flex-col items-center max-md:items-center max-md:w-full">
            <div className="flex gap-3 items-center self-start max-md:justify-center max-md:self-center max-md:mt-10">
              <a href="#" aria-label="Social Media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/75546e32ed9fcbdb91a5d22d5b6466e13a3bd02e?placeholderIfAbsent=true"
                  alt="Social Media Icon"
                  className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
              <a href="#" aria-label="Social Media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/0d1ed5e2235ff258fe96feed2c537d899e8bd9ab?placeholderIfAbsent=true"
                  alt="Social Media Icon"
                  className="object-contain overflow-hidden shrink-0 self-stretch my-auto aspect-square w-[34px]"
                />
              </a>
              <a href="#" aria-label="Social Media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/0524b0762c3dc6f7396b03f1549437efa63491e1?placeholderIfAbsent=true"
                  alt="Social Media Icon"
                  className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
            </div>
            <div className="flex gap-1.5 mt-9 text-xl font-semibold tracking-tighter leading-none text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/faffc9f6c6d042d376f9f921987135fdf8bd7ea9?placeholderIfAbsent=true"
                alt="Copyright Icon"
                className="object-contain overflow-hidden shrink-0 self-start w-3.5 aspect-square"
              />
              <p className="grow shrink w-[205px]">2024.all rights reserved.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-10 items-center self-center mt-16 text-xl font-semibold tracking-tighter leading-none text-white underline max-md:flex-col max-md:gap-6 max-md:justify-center max-md:self-center max-md:mt-10 max-md:w-full max-md:text-center max-sm:gap-5 max-sm:text-lg">
            <a href="#">whitepaper</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
