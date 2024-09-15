"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Loading from "./loading";

export default function ListRepo({ limit = 1000 }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/github/repo");
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.log({ error });
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Yah Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
      {repos?.length > 0 &&
        repos?.slice(0, limit).map((repo) => (
          <Card key={repo.id} className="w-full">
            <CardHeader>
              <CardTitle>{repo.name}</CardTitle>
              <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{repo.description}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
