import { SearchBar } from "@/components/search-bar";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            GitHub User Search
          </h1>
          <SearchBar />
        </CardContent>
      </Card>
    </div>
  );
}
