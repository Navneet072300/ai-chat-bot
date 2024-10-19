"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CreateProject } from "./CreateProject";
import { useAuth, UserButton } from "@clerk/nextjs";

export function MainPage() {
  const { isSignedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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
    console.log(`Creating project: ${projectName} in ${language}`);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative w-full h-screen">
      {/* UserButton positioned at the top right corner */}
      {isSignedIn && (
        <div className="absolute top-4 right-5 mr-3">
          <UserButton afterSwitchSessionUrl="/home" />
        </div>
      )}

      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
          The road to become a developer starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          {isSignedIn ? (
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
              <button
                className="w-40 h-10 rounded-xl bg-black border dark:border-white text-white text-sm"
                onClick={() => handleNavigation("/sign-up")}
              >
                Join now
              </button>
              <button
                className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
                onClick={() => handleNavigation("/sign-in")}
              >
                Signin
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
    </div>
  );
}
