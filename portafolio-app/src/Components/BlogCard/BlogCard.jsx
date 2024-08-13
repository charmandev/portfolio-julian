import React from "react";
import "./BlogCard.css"; // Import the CSS for styling

const BlogCard = ({
  imageSrc,
  timeAgo,
  title,
  readTime,
  description,
  favoriteCount,
}) => {
  return (
    <div className="blog-card">
      <img src={imageSrc} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <span className="blog-card-time">{timeAgo}</span>
        <h3 className="blog-card-title">{title}</h3>
        <span className="blog-card-read-time">{readTime}</span>
        <p className="blog-card-description">{description}</p>
      </div>
      <div className="blog-card-favorite">
        <span role="img" aria-label="favorite">
          💚{favoriteCount}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
