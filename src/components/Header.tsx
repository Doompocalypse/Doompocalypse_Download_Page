
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex z-10 flex-col w-full bg-black">
      <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto w-full">
        <img
          src="/lovable-uploads/a7e308bd-c48d-46aa-9a4a-f4a4b02e61d7.png"
          alt="Doompocalypse logo"
          className="h-8 w-auto"
        />
        
        <nav className="flex gap-8 items-center">
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Discover</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">My Library</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Create</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Crew</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">News</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">More</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-white" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          <div className="h-6 w-px bg-gray-600 mx-2"></div>
          <Button variant="ghost" className="text-white border-none hover:bg-transparent hover:text-gray-300">
            Sign In
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 font-medium px-6 py-2 rounded-full">
            Download
          </Button>
        </div>
      </div>
      <div className="h-px w-full bg-gray-800"></div>
    </header>
  );
};

export default Header;
