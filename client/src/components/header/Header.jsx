import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSub">Read & Think</span>
        <span className="headerTitleMain">Blog</span>
      </div>
      <img className="headerImg" src={process.env.PUBLIC_URL + "/assets/images/header.jpg"} alt="header" />
    </div>
  );
}
