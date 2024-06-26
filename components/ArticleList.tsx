"use client";

import { useEffect, useState } from "react";
import { getArticles } from "@/services/articles";
import { WritingItem } from "./WritingItem";

const ArticlesList = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getArticles()
      .then((articles) => setPosts(articles))
      .finally(() => setIsFetching(false));
  }, []);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-[720px] flex flex-col">
      <ul className="flex flex-col gap-3">
        {posts.map((post, idx) => {
          return (
            <WritingItem
              key={idx}
              coverUrl={post.coverImage.url}
              url={post.url}
              title={post.title}
              subtitle={post.subtitle}
              readTimeInMinutes={post.readTimeInMinutes}
              views={post.views}
            />
          );
        })}
      </ul>

      <a
        href="https://indentasi.dhsrlab.com"
        className="text-sm w-full md:w-1/3 py-3 px-10 mt-10 mx-auto backdrop-blur-lg rounded-lg text-center border border-[#ddddda] hover:border-slate-500 hover:shadow-md transition-all duration-300 cursor-alias"
      >
        View all writings &rarr;
      </a>
    </div>
  );
};

export { ArticlesList };
