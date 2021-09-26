import React from "react";
import style from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={style.navbar}>
        <a href="#top">Home</a>
        <a href="#aboutMe">About Me</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contacts">Contacts</a>
      </nav>{" "}
    </React.Fragment>
  );
};
export default Nav;
