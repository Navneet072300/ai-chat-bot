import { Code, Zap, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopBar() {
  return (
    <div className="bg-muted p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="c">C</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
            <SelectItem value="ruby">Ruby</SelectItem>
            <SelectItem value="php">PHP</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Code className="mr-2 h-4 w-4" />
          Convert
        </Button>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          Generate with AI
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Account
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
