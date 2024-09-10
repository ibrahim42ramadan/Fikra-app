import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { comment_idea, get_all_ideas } from "../../rtk/Silcess/Ideas_Slices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getsingleidea } from "../../rtk/Silcess/singeleidea";
export default function Writecomment({ id }) {
  const [comment, setcomment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  let mycomment = { userId: user.id, comment };
  const dispache = useDispatch();
  const x = useSelector((stat) => {
    return stat.singeliIdea;
  });
  console.log(x);

  return (
    <div className="comment-container mb-2">
      <div className="d-flex justify-content-end  align-items-center ">
        <button
          onClick={() => {
            if (comment.trim() === "") {
              return toast.error(`your comment is empty`);
            } else {
              dispache(comment_idea({ id: id, newcomments: mycomment }));

              setcomment("");
            }
          }}
          className="  btn  fs-4 bg-primary text-light"
        >
          نشر
        </button>
        <textarea
          className="comment-input ms-3"
          onChange={(e) => setcomment(e.target.value)}
          value={comment}
          type="text"
          placeholder="اجعل تعليقك بنّاءً"
        />
      </div>
    </div>
  );
}
