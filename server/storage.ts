import axios from "axios";
import { type GithubUser, type GithubRepo } from "@shared/schema";

const GITHUB_API = "https://api.github.com";

export interface IStorage {
  getUser(username: string): Promise<GithubUser>;
  getUserRepos(username: string): Promise<GithubRepo[]>;
}

export class MemStorage implements IStorage {
  private cache: Map<string, { data: any; timestamp: number }>;
  private CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.cache = new Map();
  }

  private async githubRequest(path: string) {
    const cacheKey = path;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }

    const response = await axios.get(`${GITHUB_API}${path}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    
    this.cache.set(cacheKey, {
      data: response.data,
      timestamp: Date.now(),
    });
    
    return response.data;
  }

  async getUser(username: string): Promise<GithubUser> {
    return this.githubRequest(`/users/${username}`);
  }

  async getUserRepos(username: string): Promise<GithubRepo[]> {
    return this.githubRequest(`/users/${username}/repos?sort=updated&per_page=10`);
  }
}

export const storage = new MemStorage();
