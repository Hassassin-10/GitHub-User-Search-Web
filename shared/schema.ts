import { z } from "zod";

export const githubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
  html_url: z.string(),
});

export const githubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  language: z.string().nullable(),
  html_url: z.string(),
  updated_at: z.string(),
});

export type GithubUser = z.infer<typeof githubUserSchema>;
export type GithubRepo = z.infer<typeof githubRepoSchema>;
