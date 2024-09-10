import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import UserMenu from "../usermenue";
export default function Navpar() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand logo">
            فكرة
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Dashbord"} className="nav-link">
                  Dashbord
                </Link>
              </li>
            </ul>
            <div className="d-flex">{<UserMenu user={user} />}</div>
          </div>
        </div>
      </nav>
    </>
  );
}
