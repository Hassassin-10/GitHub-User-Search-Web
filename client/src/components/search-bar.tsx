import { useState } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  const [username, setUsername] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setLocation(`/user/${username.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  );
}
