import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { UserCard } from "@/components/user-card";
import { RepositoryList } from "@/components/repository-list";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type GithubUser, type GithubRepo } from "@shared/schema";

export default function User() {
  const { username } = useParams();

  const { data: user, isLoading: isLoadingUser } = useQuery<GithubUser>({
    queryKey: ["/api/users/" + username],
  });

  const { data: repos, isLoading: isLoadingRepos } = useQuery<GithubRepo[]>({
    queryKey: ["/api/users/" + username + "/repos"],
  });

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Button>
        </Link>

        <UserCard user={user} isLoading={isLoadingUser} />
        
        {user && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Latest Repositories</h2>
            <RepositoryList repos={repos} isLoading={isLoadingRepos} />
          </div>
        )}
      </div>
    </div>
  );
}
