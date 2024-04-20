import React from "react";
import { useMatch } from "react-router-dom";
import logo from "../assets/images/dq-logo.png";

function MenuItem({ to, children }) {
  const match = useMatch(to);
  const style = match ? { textDecoration: "underline" } : {};

  return (
    <a href={to} className="mr-5 hover:text-gray-900" style={style}>
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header id="home" className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
          href="#home"
        >
          <img src={logo} className="w-24"></img>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <MenuItem to="#intro">Giới thiệu</MenuItem>
          <MenuItem to="#invitation">Thiệp mời</MenuItem>
          <MenuItem to="#album">Album</MenuItem>
          <MenuItem to="#contact">Lưu bút</MenuItem>
        </nav>
      </div>
    </header>
  );
}
