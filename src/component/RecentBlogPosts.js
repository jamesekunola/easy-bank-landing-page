import React from "react";
import Result from "../result";
import BlogCards from "./BlogCards";

export default function RecentBlogPosts() {
  const Blogs = Result[1].map((blog) => <BlogCards key={blog.id} {...blog} />);

  return (
    <div className="recent-blog-post__wrapper">
      <h1>Latest Articles</h1>

      {/* card container */}
      <div className="recent-blog-cards">{Blogs}</div>
    </div>
  );
}
