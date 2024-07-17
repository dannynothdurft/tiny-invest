"use client";
import "@/styles/blogpage.scss";
import React, { FC, useEffect, useState } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

interface Blog {
  id: string;
  title: string;
  content: string;
}

const Page: FC<PageProps> = ({ params }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blogModule = await import(`./../../../blogs/${params.id}.json`);
        setBlog(blogModule.default);
      } catch (error) {
        console.error("Error loading blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="ti--blog--container">
        <div>Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="ti--blog--container">
        <div>Blog nicht gefunden</div>
      </div>
    );
  }

  return (
    <div className="ti--blog--container">
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
    </div>
  );
};

export default Page;
