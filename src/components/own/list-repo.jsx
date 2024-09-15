"use client";
import { useEffect, useState } from "react";

export default function ListRepo() {
  const [repos, setRepos] = useState([]);
  const fetchRepos = async () => {
    try {
      const response = await fetch("/api/github/repo");
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
}
