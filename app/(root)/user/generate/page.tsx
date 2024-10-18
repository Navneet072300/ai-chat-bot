"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const GenerateWithAIPage = () => {
  const [inputCode, setInputCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const router = useRouter(); // Initialize the router

  const handleGenerateClick = () => {
    // Placeholder for AI code generation logic
    setGeneratedCode(`Generated code based on: ${inputCode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          className="px-4 py-2 rounded-lg border text-black hover:bg-gray-600"
          onClick={() => router.push("/home")} // Navigate back to /home
        >
          <ArrowLeft />
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Generate with AI
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Enter your code or description, and let AI assist you with the
        generation.
      </p>
      <div className="w-full max-w-2xl space-y-4">
        {/* Input Area */}
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your code or description here..."
          rows={6}
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        ></textarea>

        {/* Generate Button */}
        <button
          className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={handleGenerateClick}
          disabled={!inputCode}
        >
          Generate
        </button>

        {/* Output Area */}
        {generatedCode && (
          <div className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h2 className="text-lg font-medium mb-2">Generated Code:</h2>
            <pre className="whitespace-pre-wrap">{generatedCode}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateWithAIPage;
