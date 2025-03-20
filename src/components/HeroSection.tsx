
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Apple, Smartphone } from "lucide-react";

const HeroSection = () => {
  const [showPlatformsDialog, setShowPlatformsDialog] = useState(false);

  return <section className="flex overflow-hidden relative flex-col w-full min-h-[780px] pt-[475px] max-md:pt-24 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/3f57732bd8d6487c80729f13e27523e0/4a731cae3a94e7747985b66966166d65c2ecd97a?placeholderIfAbsent=true" alt="Doompocalypse Game Background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col justify-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between px-7 py-6 w-full bg-black rounded-3xl border border-solid border-zinc-500 border-opacity-70 max-w-[1260px] shadow-[0px_0px_33px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col my-auto text-white max-md:max-w-full">
            <h1 className="text-4xl font-black leading-none uppercase max-md:max-w-full">
              Play Doompocalypse
            </h1>
            <p className="self-start mt-8 text-2xl leading-none">Play on Windows PC</p>
          </div>
          <div className="text-center">
            <div className="px-8 py-3.5 bg-white rounded-xl text-stone-950 max-md:px-5">
              
              <p className="mt-2 text-xl font-bold tracking-tight leading-none">
                DOWNLOAD NOW
              </p>
            </div>
            <button 
              className="px-9 py-3 mt-2.5 text-base font-bold leading-none text-white uppercase rounded-lg bg-white bg-opacity-30 max-md:px-5"
              onClick={() => setShowPlatformsDialog(true)}
            >
              more ways to play
            </button>
          </div>
        </div>
      </div>

      <Dialog open={showPlatformsDialog} onOpenChange={setShowPlatformsDialog}>
        <DialogContent className="bg-zinc-900 text-white border-zinc-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Coming Soon in BETA</DialogTitle>
            <DialogDescription className="text-zinc-300 text-center text-base">
              <div className="space-y-6 mt-4">
                <div className="flex items-center gap-3 justify-center">
                  <Apple className="h-6 w-6" />
                  <span className="text-lg">Mac Support</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Smartphone className="h-6 w-6" />
                  <span className="text-lg">Mobile Platforms</span>
                </div>
                <p className="mt-4 pt-4 border-t border-zinc-700">
                  Doompocalypse will be available for Mac and Mobile users in our upcoming BETA launch.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>;
};

export default HeroSection;
