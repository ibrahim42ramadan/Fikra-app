// CommentCard.js
import React, { useEffect } from "react";
import "./CommentCard.css"; // ملف CSS للتنسيق

const CommentCard = ({ comment, user }) => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-info ">
          <h6 className="comment-username">{user?.username}</h6>
        </div>
        <img
          src={user?.imageUrl}
          alt={`${user?.username}'s avatar`}
          className="comment-avatar"
        />
      </div>
      <p className="comment-text">{comment.comment}</p>
    </div>
  );
};

export default CommentCard;
