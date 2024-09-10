import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create_user } from "../../rtk/Silcess/user_slics";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const dispach = useDispatch();
  const navto = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const user = {
    username,
    email,
    password,
    imageUrl,
    type: "user",
    likedIdeas: [],
    createdIdeas: [],
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispach(create_user(user));
      navto("/login");
      cleaninputs();
    } catch (err) {}
  };
  const cleaninputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setImageUrl("");
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">إنشاء حساب جديد</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            اسم المستخدم
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="أدخل اسم المستخدم"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            رابط الصورة
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="أدخل رابط الصورة"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل البريد الإلكتروني"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            كلمة المرور
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          إنشاء حساب
        </button>
      </form>
    </div>
  );
};

export default Singup;
