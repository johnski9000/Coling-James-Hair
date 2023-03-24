import React, { useState } from "react";
import logo from "../images/logo.png";

function NavBar() {
    const [open, setOpen] = useState(false)
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="logo">
          <img
            src="https://i8.amplience.net/i/jpl/shed-500-300px-200-90px-350-90px-350-100px-250-100px-2-1-dd77420df1da5b36bf717802e8e5b271"
            alt="logo"
            width={180}
            height={80}
          />
        </div>
        <div className="menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>
          <div className="number">
            <img
              src="https://i8.amplience.net/i/jpl/phone-call-877402671b025927871de04103cbe388"
              alt=""
            />
            <div className="phone_number">07790611737</div>
          </div>
        </div>
        <button className={open === false ? "hamburger" : "hamburger is-active"} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
