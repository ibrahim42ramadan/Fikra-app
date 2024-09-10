import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addIdea } from "../../rtk/Slices/ideaSlice";
import "./style.css"; // استيراد ملف التنسيقات
import { create_idea } from "../../rtk/Silcess/Ideas_Slices";

const AddIdeaForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const idea = {
    title,
    description,
    category,
    likes: 0,
    userid: user.id,
    comments: [],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_idea(idea));
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="add-idea-container">
      <h2>إضافة فكرة جديدة</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            عنوان الفكرة
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="أدخل عنوان الفكرة"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            وصف الفكرة
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="أدخل وصف الفكرة"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            الفئة
          </label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">اختر الفئة</option>
            <option value="التكنولوجيا">التكنولوجيا</option>
            <option value="التعليم">التعليم</option>
            <option value="الصحة">الصحة</option>
            <option value="التسويق">التسويق</option>
            <option value="الرياضة">الرياضة</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          إضافة الفكرة
        </button>
      </form>
    </div>
  );
};

export default AddIdeaForm;
