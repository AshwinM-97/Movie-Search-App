import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header d-flex align-items-center fs-2">
        <img src="/logo.png" alt="movie_logo" height={40} className="mx-5" />
        <span className="text1">Movies</span>
        <span className="px-2 text2">&</span>
        <span className="text3">Series</span>
      </div>
    </>
  );
};

export default Header;
