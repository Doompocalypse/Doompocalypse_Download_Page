
import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex z-10 flex-col w-full text-base leading-none bg-black max-md:max-w-full">
      <div className="flex px-8 py-4 justify-between items-center w-full max-md:max-w-full">
        <img
          src="/lovable-uploads/4db82f81-6731-40d3-adf3-353b970014d5.png"
          className="h-10 object-contain"
          alt="Doompocalypse logo"
        />
        <nav className="flex gap-8 items-center text-white">
          <button className="hover:text-red-500 transition-colors">Discover</button>
          <button className="hover:text-red-500 transition-colors">My Library</button>
          <button className="hover:text-red-500 transition-colors">Create</button>
          <button className="hover:text-red-500 transition-colors">Crew</button>
          <button className="hover:text-red-500 transition-colors">News</button>
          <button className="hover:text-red-500 transition-colors">More</button>
        </nav>
        <div className="flex gap-6 items-center">
          <Search className="w-5 h-5 text-white" />
          <div className="h-6 w-px bg-gray-600" />
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 text-white hover:text-red-500 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-center bg-white rounded-md text-black hover:bg-gray-200 transition-colors">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-800" />
    </header>
  );
};

export default Header;
