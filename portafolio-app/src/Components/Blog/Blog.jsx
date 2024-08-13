import React from "react";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className="blog-container">
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=Scope+in+JavaScript"
        timeAgo="1 month ago"
        title="Scope in Javascript"
        readTime="2 Min Read"
        description="JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web..."
        favoriteCount={1}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=React+Hooks"
        timeAgo="2 weeks ago"
        title="Understanding React Hooks"
        readTime="5 Min Read"
        description="React Hooks revolutionize the way we handle state and side effects in functional components..."
        favoriteCount={5}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=Async+JavaScript"
        timeAgo="3 days ago"
        title="Mastering Async JavaScript"
        readTime="4 Min Read"
        description="Asynchronous programming is crucial in JavaScript for handling operations that take time to complete..."
        favoriteCount={3}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=CSS+Grid"
        timeAgo="1 week ago"
        title="CSS Grid: The Ultimate Guide"
        readTime="7 Min Read"
        description="CSS Grid is a powerful tool for creating two-dimensional layouts on the web..."
        favoriteCount={8}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=JavaScript+ES6"
        timeAgo="2 months ago"
        title="What's New in JavaScript ES6"
        readTime="6 Min Read"
        description="ES6 brought many new features to JavaScript, including arrow functions, classes, and template literals..."
        favoriteCount={10}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=TypeScript"
        timeAgo="3 months ago"
        title="Getting Started with TypeScript"
        readTime="8 Min Read"
        description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript..."
        favoriteCount={12}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=React+State+Management"
        timeAgo="4 days ago"
        title="React State Management"
        readTime="3 Min Read"
        description="Managing state in React can be challenging. Here's how to master it using Context API and Redux..."
        favoriteCount={4}
      />
      <BlogCard
        imageSrc="https://via.placeholder.com/300x150.png?text=Node.js"
        timeAgo="5 months ago"
        title="Building a REST API with Node.js"
        readTime="9 Min Read"
        description="Node.js is an excellent choice for building fast and scalable web applications..."
        favoriteCount={15}
      />
    </div>
  );
};

export default Blog;
