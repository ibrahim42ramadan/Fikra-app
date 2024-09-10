import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add_alike,
  comment_idea,
  get_idea_by_id,
} from "../../rtk/Silcess/Ideas_Slices";
import CommentCard from "../../componentes/comment";
import { get_all_users, get_user_by_id } from "../../rtk/Silcess/user_slics";
import Writecomment from "../../componentes/writecomment";
import { getsingleidea } from "../../rtk/Silcess/singeleidea";
const PostDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userlikes = user.likedIdeas;
  const ideaId = useParams();
  const dispach = useDispatch();
  const idea = useSelector((state) => {
    return state.singeliIdea;
  });

  const comentlength = useSelector((state) => {
    return state.singeliIdea.comments?.length;
  });
  let likelength = useSelector((state) => {
    return state.ideas.likes;
  });
  const users = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispach(getsingleidea(ideaId.id));
    dispach(get_all_users());
  }, [likelength, idea, dispach]);

  const commentes = idea.comments;

  let owner = () => {
    let x = users.map((user) => {
      if (user.id === idea.userid) {
        return (
          <div className="owner-info">
            <div className=" data">
              <p className="owner-name me-2 text-secondary fs-5">
                {user.username}
              </p>

              <img
                src={user.imageUrl}
                alt={user.username}
                className="owner-image"
              />
            </div>

            <p className="post-time ">منذ وقت قليل</p>
          </div>
        );
      } else {
        return null;
      }
    });
    return x;
  };

  const ideasHandler = () => {
    if (idea && users.length > 0) {
      return commentes?.map((comment) => {
        const user = users?.find((user) => user.id === comment.userId);
        if (user !== null || user !== undefined) {
          return <CommentCard key={comment.id} comment={comment} user={user} />;
        }
      });
    } else {
      return <span>لا توجد تعليقات حتي الان حاليا��</span>;
    }
  };
  if (!idea) {
    return <div>الفكرة غير موجودة</div>;
  }

  return (
    <div className="container">
      {owner()}
      <div className="post-details " key={idea.id}>
        <div className="contentidea me-5">
          {" "}
          <h2>{idea.title}</h2>
          <p>{idea.description}</p>
        </div>
        <hr></hr>
        <div className="post-footer d-flex justify-content-between">
          <p className="btn bg-light  text-darck"> {idea.category}#</p>
          <p className="btn bg-light  text-darck"> {idea.comments?.length}💬</p>
          <p
            onClick={() => {
              dispach(add_alike({ ideaid: idea.id, userid: user.id }));
            }}
            className=" btn bg-light  text-danger "
          >
            {idea.likes} ♥
          </p>
        </div>
        <div className="post-content">
          <Writecomment id={idea.id} />
          <p>{ideasHandler()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
