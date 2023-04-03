import React from "react";
import "./topnav.css";
import { Link } from "react-router-dom";

export default function TopNav() {
  const user = false;
  return (
    <div className="topNav">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link textLink" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link textLink" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link textLink" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link textLink" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link textLink" to="/logout">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <img
              className="topProfileImg"
              src={process.env.PUBLIC_URL + "/assets/images/profile.jpg"}
              alt=""
            />
          </>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link textLink" to="/login">
                  Login
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link textLink" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
