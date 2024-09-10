import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css"; // CSS file
import ProfileSidebar from "../../componentes/ProfileSidebar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <ProfileSidebar user={user} />

      {/* Main Content */}

      <Outlet />
    </div>
  );
};

export default Profile;
