"use client";
import { useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const words = [
    { text: "Create" },
    { text: "with" },
    { text: "your" },
    { text: "own" },
    {
      text: "AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The road to become a developer starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {isLoggedIn ? (
          <>
            <button className="w-40 h-10 rounded-xl bg-green-500 text-white text-sm transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg">
              Create
            </button>
            <button className="w-40 h-10 rounded-xl bg-blue-500 text-white text-sm transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg">
              Convert
            </button>
            <button className="w-40 h-10 rounded-xl bg-purple-500 text-white text-sm transition duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg">
              Generate with AI
            </button>
          </>
        ) : (
          <>
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white text-white text-sm transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg">
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
}
