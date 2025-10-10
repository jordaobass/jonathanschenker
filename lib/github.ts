export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  location: string;
  company: string | null;
  blog: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }

  return res.json();
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 },
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!res.ok) {
    throw new Error('Failed to fetch repositories');
  }

  return res.json();
}
