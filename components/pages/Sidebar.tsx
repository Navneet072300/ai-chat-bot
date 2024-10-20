import React from "react";
import { Home, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col h-screen w-64 bg-gray-800 text-white",
        className
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Project</h1>
        <p className="text-2xl font-bold">+</p>
      </div>
    </div>
  );
};

export default Sidebar;
