import { Textarea } from "@/components/ui/textarea";

export function CodeEditor({ code, setCode }: any) {
  return (
    <div className="flex-1 p-4">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-full font-mono"
        placeholder="Write your code here..."
      />
    </div>
  );
}
