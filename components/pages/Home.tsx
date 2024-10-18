"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CreateProject } from "./CreateProject";

export function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication check
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const words = [
    { text: "Create" },
    { text: "with" },
    { text: "your" },
    {
      text: "own",
    },
    {
      text: "AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const handleCreateProject = (language: string, projectName: string) => {
    // Handle the creation logic here
    console.log(`Creating project: ${projectName} in ${language}`);
  };

  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the given path
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The road to become a developer starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {isLoggedIn ? (
          <>
            <button
              className="w-40 h-10 rounded-xl bg-green-500 text-white text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Create
            </button>
            <button
              className="w-40 h-10 rounded-xl bg-blue-500 text-white text-sm"
              onClick={() => handleNavigation("/user/convert")}
            >
              Convert
            </button>
            <button
              className="w-40 h-10 rounded-xl bg-purple-500 text-white text-sm"
              onClick={() => handleNavigation("/user/generate")}
            >
              Generate with AI
            </button>
          </>
        ) : (
          <>
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Signup
            </button>
          </>
        )}
      </div>

      {/* Create Project Modal */}
      <CreateProject
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
}
