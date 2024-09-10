import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Homepage = () => {
  return (
    <div className="home-container">
      {/* قسم الترحيب بالموقع */}
      <header className="hero-section text-center py-5">
        <h1 className="hero-title">أهلاً بك في منصة الأفكار</h1>
        <p className="hero-subtitle">
          شارك أفكارك المبتكرة مع المجتمع، واستلهم أفكار جديدة من الآخرين.
        </p>
        <Link to="/ideas" className="btn btn-primary btn-lg mt-3">
          تصفح الأفكار
        </Link>
      </header>

      {/* قسم عرض الأفكار */}
      <section className="ideas-section container mt-5">
        <h2 className="section-title">أحدث الأفكار</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="idea-card p-4 mb-4 shadow-sm">
              <h3 className="idea-title">تطبيق إدارة المهام</h3>
              <p className="idea-description">
                فكرة لتطبيق يساعد المستخدمين في إدارة مهامهم اليومية بسهولة
                وفعالية.
              </p>
              <Link to="/ideas/1" className="btn btn-outline-primary">
                قراءة المزيد
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="idea-card p-4 mb-4 shadow-sm">
              <h3 className="idea-title">موقع لتبادل الكتب</h3>
              <p className="idea-description">
                منصة تسمح للأشخاص بتبادل الكتب التي انتهوا من قراءتها مع
                الآخرين.
              </p>
              <Link to="/ideas/2" className="btn btn-outline-primary">
                قراءة المزيد
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="idea-card p-4 mb-4 shadow-sm">
              <h3 className="idea-title">خدمة توصيل ذكية</h3>
              <p className="idea-description">
                تطبيق يربط بين المستخدمين وشركات التوصيل بطريقة ذكية وسريعة.
              </p>
              <Link to="/ideas/3" className="btn btn-outline-primary">
                قراءة المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
