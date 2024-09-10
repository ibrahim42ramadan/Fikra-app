// IdeaCard.js

import React from "react";
import "./IdeaCard.css";
import { useNavigate } from "react-router-dom";
import { host } from "../../rtk/api_link";

const IdeaCard = ({ idea, owner }) => {
  const navto = useNavigate();
  return (
    <div
      onClick={() => {
        const location = window.location.href;
        if (
          location == `${host}/ideas` ||
          location == `${host}/profile/liked-ideas`
        ) {
          navto(`/PostDetails/${idea.id} `);
        } else {
          navto(`/profile/PostDetails/${idea.id} `);
        }
      }}
      className="idea-card"
    >
      <div className="owner-info">
        <div className=" data">
          <p className="owner-name me-2">{owner.username}</p>

          <img
            src={owner.imageUrl}
            alt={owner.username}
            className="owner-image"
          />
        </div>

        <p className="post-time ">منذ وقت قليل</p>
      </div>
      <div className="idea-content">
        <h3 className="">{idea.title}</h3>
        <p>{idea.description}</p>
      </div>
      <p className="btn bg-primary  text-light"> {idea.category}#</p>
      <div className="idea-footer">
        <p className="btn fs-4 btn-outline-secondary"> {idea.likes} 👌</p>
        {idea.comments?.length > 0 && (
          <p className="btn fs-4 btn-outline-secondary">
            {" "}
            {idea.comments?.length} 💬
          </p>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
