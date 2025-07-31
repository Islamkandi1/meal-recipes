import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from './../logo/Logo';

function Navbar({back}) {
  const [bg,setBg] = useState("")

useEffect(()=>{
  window.addEventListener("scroll",bgNav)
  return ()=>{window.removeEventListener("scoll",bgNav)}
},[])
function bgNav(){
  scrollY >=150? setBg("bg-nav") :setBg("")
}
  return (
    <>
      <nav className={`navbar navbar-expand-lg  fixed-top ${back}  ${bg}`}>
        <div className="container">
    <Logo/> 
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link my-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="about">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="menu">
                  menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="contact">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
