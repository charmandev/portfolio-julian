import React from "react";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  return (
    <div className="BlogsContainer">
      <div className="BlogTitle">
        <h3>Estudios</h3>
      </div>
      <div className="contenedorBlogCards">
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />{" "}
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />{" "}
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />{" "}
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />{" "}
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />{" "}
        <BlogCard
          imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
          timeAgo="1 month ago"
          title="Scope in Javascript"
          readTime="2 Min Read"
          description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
          favoriteCount={1}
        />
      </div>
    </div>
  );
};

export default Blogs;
