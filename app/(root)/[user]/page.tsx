"use client";
import { BottomBar } from "@/components/pages/BottomBar";
import { CodeEditor } from "@/components/pages/CodeEditor";
import { Sidebar } from "@/components/pages/Sidebar";
import { TopBar } from "@/components/pages/Topbar";
import { useState } from "react";

export default function OnlineCompiler() {
  const [activeFile, setActiveFile] = useState("main.js");
  const [code, setCode] = useState("// Your code here");

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <CodeEditor code={code} setCode={setCode} />
        <BottomBar />
      </div>
    </div>
  );
}
