// IdeasPage.js

import React, { useEffect } from "react";
import IdeaCard from "../../componentes/IdeaCard";
// import IdeaCard from "./IdeaCard";
import "./IdeasPage.css";
import { useDispatch, useSelector } from "react-redux";
import { get_all_ideas } from "../../rtk/Silcess/Ideas_Slices";

// البيانات كمثال

const IdeasPage = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(get_all_ideas());
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  const ideas = useSelector((state) => {
    return state.ideas;
  });
  if (ideas.length == 0) {
    return <h1>Loading...</h1>;
  }
  const ideasHandler = () => {
    if (ideas.length > 0) {
      console.log(ideas);

      const ideasData = ideas?.filter((idea) => idea?.userid === user.id);
      if (ideasData === undefined || ideasData.length === 0) {
        return <h1>لا توجد أفكار حاليا��</h1>;
      } else {
        return ideasData?.map((idea) => {
          return <IdeaCard key={idea.id} idea={idea} owner={user} />;
        });
      }
    } else {
      return <h1>Loading...</h1>;
    }
  };
  return (
    <div className="ideas-page">
      <h1 className="mb-3">الأفكار</h1>
      <div className="ideas-list">{ideasHandler()}</div>
    </div>
  );
};

export default IdeasPage;
