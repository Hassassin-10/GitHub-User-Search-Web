import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Users, BookOpen } from "lucide-react";
import { type GithubUser } from "@shared/schema";

interface UserCardProps {
  user?: GithubUser;
  isLoading: boolean;
}

export function UserCard({ user, isLoading }: UserCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-full max-w-md mb-4" />
              <div className="flex gap-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!user) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar_url} alt={user.login} />
            <AvatarFallback>{user.login[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            
            {user.bio && <p className="text-muted-foreground mb-4">{user.bio}</p>}
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">{user.public_repos}</span>
                <span className="text-muted-foreground">repositories</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{user.followers}</span>
                <span className="text-muted-foreground">followers</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{user.following}</span>
                <span className="text-muted-foreground">following</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
