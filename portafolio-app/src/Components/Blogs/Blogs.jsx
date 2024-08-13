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
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="1 month ago"
          title="Scope in JavaScript"
          readTime="2 Min Read"
          description="JavaScript's scope determines where variables and functions are accessible in your code. Learn about global, function, and block scope."
          favoriteCount={15}
        />
        <BlogCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="2 months ago"
          title="Understanding Closures"
          readTime="3 Min Read"
          description="Closures allow functions to retain access to their lexical scope even after the function has returned. This guide explains closures in depth."
          favoriteCount={22}
        />
        <BlogCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="3 months ago"
          title="Async Programming in JavaScript"
          readTime="4 Min Read"
          description="Asynchronous programming in JavaScript is crucial for handling operations like API requests. Discover how to use promises and async/await."
          favoriteCount={30}
        />
        <BlogCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="4 months ago"
          title="New ES6 Features"
          readTime="3 Min Read"
          description="Explore the new features introduced in ES6, including arrow functions, template literals, and destructuring. Enhance your JavaScript skills!"
          favoriteCount={18}
        />
        <BlogCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="5 months ago"
          title="Getting Started with React Hooks"
          readTime="5 Min Read"
          description="React Hooks provide a new way to use state and lifecycle features in functional components. Learn how to implement useState, useEffect, and more."
          favoriteCount={27}
        />
        <BlogCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iXKOgkbjNTvOHYlWEv0HI9IiqMy1D4fB0A&s" // URL de imagen real
          timeAgo="6 months ago"
          title="JavaScript Performance Tips"
          readTime="3 Min Read"
          description="Improve your JavaScript application's performance with these optimization tips and techniques. Learn about code splitting, lazy loading, and more."
          favoriteCount={20}
        />
      </div>
    </div>
  );
};

export default Blogs;
