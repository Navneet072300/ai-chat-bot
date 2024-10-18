"use client";
import { BottomBar } from "@/components/pages/BottomBar";
import { CodeEditor } from "@/components/pages/CodeEditor";
import { Sidebar } from "@/components/pages/Sidebar";
import { TopBar } from "@/components/pages/Topbar";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter
import { useState } from "react";

const OnlineCompiler = () => {
  const [activeFile, setActiveFile] = useState("main.js");
  const [code, setCode] = useState("// Your code here");
  const router = useRouter(); // Initialize the router

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4">
          <button
            className="px-4 py-2 rounded-lg border text-black hover:bg-gray-600"
            onClick={() => router.push("/home")} // Navigate back to /home
          >
            <ArrowLeft />
          </button>
        </div>
        <TopBar />
        <CodeEditor code={code} setCode={setCode} />
        <BottomBar />
      </div>
    </div>
  );
};

export default OnlineCompiler;
