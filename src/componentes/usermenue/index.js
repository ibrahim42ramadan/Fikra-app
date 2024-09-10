import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // تأكد من استيراد ملف CSS الخاص بك

const UserMenu = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="userdata">
      <div className="userimg" onClick={toggleMenu}>
        <img src={user?.imageUrl} alt="user" />
      </div>
      {isMenuOpen && (
        <ul className="menu">
          <li>
            <Link to="/profile" className="dropdown-item">
              Profile 👤
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("user");
              }}
              className="dropdown-item"
            >
              Logout 🛺
            </Link>
          </li>
          <li>
            <Link to="" className="dropdown-item">
              Stting ⚙
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
