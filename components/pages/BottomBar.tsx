import { History } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomBar() {
  return (
    <div className="bg-muted p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="outline">
          <History className="mr-2 h-4 w-4" />
          History
        </Button>
      </div>
      <div className="text-sm text-muted-foreground">
        Free Plan - Upgrade for more features
      </div>
    </div>
  );
}
