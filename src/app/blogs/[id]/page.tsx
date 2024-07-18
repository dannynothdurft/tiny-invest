"use client";
import "@/styles/blogpage.scss";
import React, { FC, useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

interface Blog {
  id: string;
  title: string;
  image: string;
  content: string;
  c_id: string;
  c_script: string;
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
      <Image
        className="header--blog--image"
        src={blog.image}
        alt="blog.title"
        width={1200}
        height={350}
      />
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <hr className="my-10" />
      <div style={{ width: "100%" }} id={blog.c_id}></div>
      <Script src={blog.c_script}></Script>
    </div>
  );
};

export default Page;
