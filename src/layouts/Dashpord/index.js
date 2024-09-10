import React from "react";
import "./style.css";
import Sidebar from "../../componentes/siedpar";
import { Link, Outlet } from "react-router-dom";
const Dashpord = () => {
  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button className="btn btn-primary" id="menu-toggle">
            Toggle Menu
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashpord;
