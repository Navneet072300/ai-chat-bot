"use client";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <button
        className="px-4 py-2 rounded-lg border text-black hover:bg-gray-600"
        onClick={() => router.push("/home")} // Navigate back to /home
      >
        <ArrowLeft />
      </button>
      <div className=" flex items-center justify-center h-screen">
        <SignUp />
      </div>
    </>
  );
}
