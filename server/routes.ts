import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { githubUserSchema, githubRepoSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express) {
  app.get("/api/users/:username", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.username);
      const validatedUser = githubUserSchema.parse(user);
      res.json(validatedUser);
    } catch (error: any) {
      if (error.response?.status === 404) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(500).json({ message: "Failed to fetch user" });
      }
    }
  });

  app.get("/api/users/:username/repos", async (req, res) => {
    try {
      const repos = await storage.getUserRepos(req.params.username);
      const validatedRepos = z.array(githubRepoSchema).parse(repos);
      res.json(validatedRepos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch repositories" });
    }
  });

  return createServer(app);
}
