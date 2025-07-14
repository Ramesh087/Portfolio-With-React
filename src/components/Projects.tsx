import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [showAll, setShowAll] = useState(false);

  const projectImages: Record<string, string> = {
  "portfolio-with-react": "src/assets/images/portfolio-with-react.png",
  "todo-list": "src/assets/images/todo.png",
  "typing-tester": "",
  "tic-tac-toe": "src/assets/images/XOXO.png",
  "qr-code-generator": "src/assets/images/qrcode.png",
  "calculator-app": "src/assets/images/calculator.png",
  "portfolio-website": "src/assets/images/portfolio1.png",
  "video-hosting-website-backend": "",
};
  const pinnedRepos = [
    "portfolio-with-react",
    "todo-list",
    "typing-tester",
    "tic-tac-toe",
    "qr-code-generator",
    "calculator-app",
    "portfolio-website",
    "video-hosting-website-backend",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get("https://api.github.com/user/repos?per_page=100", {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });

        const filtered = res.data.filter((repo: GitHubRepo) =>
          pinnedRepos.includes(repo.name.toLowerCase())
        );

        setRepos(filtered);
      } catch (error) {
        console.error("GitHub API error:", error);
      }
    };

    fetchRepos();
  }, []);

  // Determine which repos to show
  const displayedRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-16 bg-gray-50 dark:bg-[#111] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedRepos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={
                repo.description ||
                "A hands-on project built to practice and apply real-world web development skills."
              }
              image={projectImages[repo.name.toLowerCase()] || "src/assets/default.webp"}
              github={repo.html_url}
              demo={repo.homepage || repo.html_url}
            />
          ))}
        </div>

        {repos.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {repos.length === 0 && (
          <p className="text-center mt-8 text-gray-500">No pinned projects found.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
