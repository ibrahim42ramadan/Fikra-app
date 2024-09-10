import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { login_user } from "../../rtk/Silcess/user_slics";
import { toast } from "react-toastify";
const Login = () => {
  const dispach = useDispatch();
  const navto = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const user = { email, password };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispach(login_user(user));
    const islogin = localStorage.getItem("user");
    if (islogin) {
      navto("/");
    } else toast.error("البيانات المدخلة ��ير ��حيحة");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center">تسجيل الدخول</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
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
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                تسجيل الدخول
              </button>
            </form>
            <p className="mt-3 text-center">
              ليس لديك حساب؟ <Link to="/register">إنشاء حساب</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
