import React from "react";
import "./topnav.css";

export default function TopNav() {
  return (
    <div className="topNav">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contract</li>
          <li>Write</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topProfileImg" src={process.env.PUBLIC_URL + "/assets/images/profile.jpg"} alt="" />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
