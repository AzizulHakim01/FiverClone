import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">
            fiverr<span className="dot">.</span>
          </span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
      {
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
