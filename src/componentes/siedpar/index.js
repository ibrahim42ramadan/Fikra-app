import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Dashboard</div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-light">
          Overview
        </Link>
        <Link
          to="/Dashbord/users"
          className="list-group-item list-group-item-action bg-light"
        >
          Users
        </Link>
        <Link
          to="/reports"
          className="list-group-item list-group-item-action bg-light"
        >
          postes
        </Link>
        <Link to="" className="list-group-item list-group-item-action bg-light">
          category
        </Link>
        <Link
          to="/settings"
          className="list-group-item list-group-item-action bg-light"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
