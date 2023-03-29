import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Azizul",
    image:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/279791909_1904530636403860_4967678786887752663_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l8NXNoXFbAgAX-Bb9cH&_nc_ht=scontent.fdac5-2.fna&oh=00_AfD8ODUPV_FmsZ4wTnwIGMDCK8_iiYcjsO7S0_NEwxXk8A&oe=64299A8A",
    isSeller: true,
  };
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
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <span>Sign in</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src={currentUser.image} alt={currentUser.username} />
              <span>{currentUser.username}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <span>Gigs</span>
                    <span>Add New Gig</span>
                    <span>Messages</span>
                    <span>Orders</span>
                    <span>Logout</span>
                  </>
                )}
              </div>}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
