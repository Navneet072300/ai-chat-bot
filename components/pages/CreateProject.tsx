"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (language: string, projectName: string) => void;
}

export function CreateProject({
  isOpen,
  onClose,
  onCreate,
}: CreateProjectProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
        <div className="flex space-x-4">
          {/* Language Selection */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search language..."
              className="w-full mb-2 p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-40 overflow-y-auto">
              {filteredLanguages.map((language) => (
                <div
                  key={language}
                  className={`p-2 cursor-pointer rounded ${
                    selectedLanguage === language
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedLanguage(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>

          {/* Project Naming */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Project Name"
              className="w-full mb-4 p-2 border rounded"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={() => {
                onCreate(selectedLanguage, projectName);
                router.push("/user/create"); // Navigate to the /user/create page
                onClose();
              }}
              disabled={!selectedLanguage || !projectName}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
