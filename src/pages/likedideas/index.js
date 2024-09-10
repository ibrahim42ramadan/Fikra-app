import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_users, get_user_by_id } from "../../rtk/Silcess/user_slics";
import { get_all_ideas } from "../../rtk/Silcess/Ideas_Slices";
import IdeaCard from "../../componentes/IdeaCard";
import { getsingleuser } from "../../rtk/Silcess/singleuser";

export default function Liked_Ideas() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispach = useDispatch();
  const ideas = useSelector((state) => {
    return state?.ideas;
  });
  const likes = useSelector((state) => {
    return state.singeluser?.likedIdeas;
  });
  const users = useSelector((state) => state?.user); // هنا تأكد من أنك تأخذ المستخدمين بشكل صحيح

  useEffect(() => {
    dispach(get_all_ideas());
    dispach(getsingleuser(user.id));
    dispach(get_all_users());
  }, []);
  if (!ideas || ideas.length === 0) {
    return <h1>جار تحميل الأفكار...</h1>;
  }

  if (!users || users.length === 0) {
    return <h1>جار تحميل المستخدمين...</h1>;
  }
  const ideasHandlarforuser = () => {
    if (ideas.length > 0) {
      return ideas
        .filter((idea) => likes?.includes(idea.id)) // فلترة الأفكار التي تتضمن إعجاب المستخدم
        .map((idea) => {
          const owner = users.find((user) => user.id === idea.userid);
          return (
            <div className="col-lg-6">
              <IdeaCard key={idea.id} idea={idea} owner={owner} />
            </div>
          ); // إرجاع بطاقة الفكرة
        });
    } else {
      return <h1>لا توجد أفكار </h1>; // لو لم يتم التحقق من أي أفكار تتضمن المستخدم �� يتم عرض رسالة للمستخدم
    }
  };

  return (
    <div className="ideas-page">
      <h1 className="mb-5 hedars  "> الافكار اللتي نالت اعجابك</h1>
      <div className="ideas-list row"> {ideasHandlarforuser()}</div>
    </div>
  );
}
