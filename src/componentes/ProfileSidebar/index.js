import React from "react";
import { Link } from "react-router-dom";
import "./ProfileSidebar.css";

const ProfileSidebar = ({ user }) => {
  return (
    <div className="profile-sidebar">
      <div className="profile-picture">
        <img src={user.imageUrl} alt="Profile" className="profile-img" />
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/profile">الملف الشخصي</Link>
        </li>
        <li>
          <Link to="/profile/ideas"> ⚙💡 أفكاري</Link>
        </li>
        <li>
          <Link to="/profile/liked-ideas">❤اعجبتني</Link>
        </li>
        <li>
          <Link to="/profile/addideas">💾💭اضافه فكرة</Link>
        </li>
        <li>
          <Link to="/settings">الإعدادات</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
