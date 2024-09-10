import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// تأكد من مسار الاستيراد الصحيح
import IdeaCard from "../../componentes/IdeaCard"; // تأكد من مسار الاستيراد الصحيح
import { get_all_ideas } from "../../rtk/Silcess/Ideas_Slices";
import { get_all_users } from "../../rtk/Silcess/user_slics";
import { get_all_values } from "../../rtk/Silcess/search-slics";
import { toast } from "react-toastify";

const RandomIdeasPage = () => {
  const dispatch = useDispatch();
  const [searchvalue, setsearchvalue] = useState("");
  const [type, settype] = useState("");
  const ideas = useSelector((state) => state.ideas);
  const users = useSelector((state) => state.user);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(get_all_ideas());
    dispatch(get_all_users());
  }, [dispatch]);

  // useEffect(() => {});
  if (users.length == 0 || ideas.length == 0) {
    return <h1 className=" hedars"> .......جار التحميل</h1>;
  } else {
  }
  const datahandle = () => {
    if (users.length > 0 && ideas.length > 0) {
      return ideas.map((idea) => {
        const user = users.find((user) => user.id == idea.userid);
        if (user) {
          return (
            <div className="col-lg-4" key={idea.id}>
              <IdeaCard idea={idea} owner={user} />
            </div>
          );
        }
      });
    } else {
      return <h1>Loading...</h1>;
    }
  };
  const forsearch = () => {
    if (search.length > 0) {
      return search.map((idea) => {
        const user = users.find((user) => user.id === idea?.userid);
        if (user) {
          return (
            <div className="col-lg-6" key={idea.id}>
              <IdeaCard idea={idea} owner={user} />
            </div>
          );
        }
      });
    } else {
      return datahandle();
    }
  };
  return (
    <div className="">
      <div className=" mb-3 d-flex justify-content-between align-items-center">
        <div>
          <span
            onClick={() => {
              if (searchvalue !== undefined && searchvalue !== "") {
                console.log(searchvalue);
                dispatch(get_all_values(searchvalue.trim()));
              } else {
                return toast.error("inner search valu");
              }
            }}
            className="btn"
          >
            بحث
          </span>
          <input
            onChange={(e) => {
              setsearchvalue(e.target.value);
            }}
            value={searchvalue}
            className="ms-2"
            type="text"
          ></input>
          {/* types */}
          {/* <select
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          >
            <option>اختر</option>
            <option>الفكرات</option>
            <option>المستخدمون</option>
            <option>التعليقات</option>
            <option>البحث</option>
          </select> */}
          {/* typee */}
        </div>
        <h1 className="hedars">اكتشف أفكار جديدة</h1>
      </div>
      <div className="container-fluid">
        <div className="row">{forsearch()}</div>
      </div>
    </div>
  );
};

export default RandomIdeasPage;
