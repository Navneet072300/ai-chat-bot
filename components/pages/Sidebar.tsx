import { Folder, File, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar({ activeFile, setActiveFile }: any) {
  return (
    <div className="w-64 bg-muted p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Files</h2>
        <Button size="icon" variant="ghost">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="mb-2">
          <div className="flex items-center">
            <Folder className="mr-2 h-4 w-4" />
            <span>Project</span>
          </div>
          <div className="ml-4">
            {["main.js", "styles.css"].map((file) => (
              <div
                key={file}
                className="flex items-center cursor-pointer"
                onClick={() => setActiveFile(file)}
              >
                <File className="mr-2 h-4 w-4" />
                <span className={activeFile === file ? "font-semibold" : ""}>
                  {file}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button variant="outline" className="w-full">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
}
