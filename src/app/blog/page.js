"use client";
import Loading from "@/components/own/loading";
import { Typography } from "@/components/own/typography";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/devto/articles");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error mengambil data artikel Dev.to:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center w-full md:w-[50vw] gap-12">
      <div className="flex flex-col w-full gap-6">
        <Typography variant="h2" size="md" className="tracking-wide">
          Blog
        </Typography>
        <Typography variant="p" size="sm" className="leading-relaxed tracking-wide">
          Menulis adalah salah satu cara untuk mengekspresikan diri dan mengingat apa saja yang telah saya pelajari.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {articles.map((item) => (
            <Card
              key={item.id}
              className="w-full hover:bg-accent hover:cursor-pointer"
              onClick={() => {
                window.open(`https://dev.to${item.path}`, "_blank");
              }}
            >
              <CardHeader>
                <Typography variant="h6" size="sm" className="tracking-wide">
                  {item.title}
                </Typography>
                <CardDescription>{item.readable_publish_date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
