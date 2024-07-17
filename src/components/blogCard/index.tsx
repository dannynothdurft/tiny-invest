"use client";
import "@/styles/blogcard.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogCard() {
  return (
    <Link href="/blogs/block1" className="blogcard--container">
      <Image src="/images/banner-art.svg" alt="" width={1000} height={1000} />
      <div className="p-5">
        <h5>Noteworthy technology acquisitions 2021</h5>
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order....
        </p>
        <div className="card--info">
          <span>von Danny Nothdurft</span>
          <span>21.20.2014</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
