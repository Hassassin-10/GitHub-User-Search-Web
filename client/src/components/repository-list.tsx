import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { type GithubRepo } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

interface RepositoryListProps {
  repos?: GithubRepo[];
  isLoading: boolean;
}

export function RepositoryList({ repos, isLoading }: RepositoryListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-full max-w-md mb-4" />
              <div className="flex gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!repos?.length) {
    return (
      <Card>
        <CardContent className="p-4 text-center text-muted-foreground">
          No repositories found
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <Card key={repo.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{repo.name}</h3>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            {repo.description && (
              <p className="text-muted-foreground mb-4">{repo.description}</p>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  {repo.language}
                </span>
              )}
              
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                {repo.stargazers_count}
              </span>
              
              <span className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                {repo.forks_count}
              </span>
              
              <span className="text-muted-foreground">
                Updated {formatDistanceToNow(new Date(repo.updated_at))} ago
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
