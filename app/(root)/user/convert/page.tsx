"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CodeConverter = () => {
  const [inputLanguage, setInputLanguage] = useState("");
  const [outputLanguage, setOutputLanguage] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const router = useRouter(); // Initialize the router

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Ruby",
    "TypeScript",
    "Swift",
    "Rust",
  ];

  const handleConvertClick = () => {
    // Placeholder for code conversion logic
    setConvertedCode(
      `Converted code from ${inputLanguage} to ${outputLanguage}:\n${inputCode}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          className="px-4 py-2 rounded-lg border text-black hover:bg-gray-600"
          onClick={() => router.push("/home")} // Navigate back to /home
        >
          <ArrowLeft />
        </button>
      </div>

      {/* Top Center Convert Button */}
      <div className="mb-6">
        <button
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={handleConvertClick}
          disabled={!inputLanguage || !outputLanguage || !inputCode}
        >
          Convert
        </button>
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-4xl space-x-6">
        {/* Left Side - Input Language and Code */}
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Input Language
          </h2>
          <select
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={inputLanguage}
            onChange={(e) => setInputLanguage(e.target.value)}
          >
            <option value="" disabled>
              Select Language
            </option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <textarea
            className="w-full h-48 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Paste your code here..."
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          ></textarea>
        </div>

        {/* Right Side - Output Language and Converted Code */}
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Output Language
          </h2>
          <select
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={outputLanguage}
            onChange={(e) => setOutputLanguage(e.target.value)}
          >
            <option value="" disabled>
              Select Language
            </option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <div className="w-full h-48 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-y-auto">
            {convertedCode ? (
              <pre>{convertedCode}</pre>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Converted code will appear here...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeConverter;
