
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2070&auto=format&fit=crop"
          alt="Apocalyptic background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-4">DOOMpocalypse</h2>
            <p className="text-lg max-w-md">Prepare for the apocalypse in a virtual world.</p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-2xl font-bold mb-2">THE REVOLUTION IS HERE</p>
            <p className="text-lg">Want To BETA Test The Game?</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start my-8">
          <a href="mailto:HQ@DOOMPOCALYPSE.COM" className="text-white text-xl font-bold underline mb-8 md:mb-0">
            HQ@DOOMPOCALYPSE.COM
          </a>
          
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-800 px-4 py-3 rounded-lg w-full sm:w-64"
              />
              <Button className="bg-gray-500 hover:bg-gray-600 text-white rounded-full px-8">
                Join The Waitlist
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M8.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M15.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M18 8.4c-1-1-2.3-1.4-3.8-1.4H9.8c-1.5 0-2.8.4-3.8 1.4C5 9.4 4 12.1 4 16c0 .6.1 1.4.5 2.3.4.9 1 1.8 2 2.2 1 .4 4 .1 4.7.1h1.6c.7 0 3.7.3 4.7-.1 1-.4 1.6-1.3 2-2.2.4-.9.5-1.7.5-2.3 0-3.9-1-6.6-2-7.6"/>
                <path d="M9 14v4"/>
                <path d="M15 14v4"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                <path d="M15 8v8a4 4 0 0 0 4 4h1"/>
                <path d="M15 8a4 4 0 0 0-4-4H9"/>
                <path d="M15 8h-2"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex items-center text-sm mb-6 md:mb-0">
            <span>© 2024 All Rights Reserved.</span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-white underline">Whitepaper</a>
            <a href="#" className="text-white underline">Terms and Conditions</a>
            <a href="#" className="text-white underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
