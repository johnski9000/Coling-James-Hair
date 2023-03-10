import React, { useState } from "react";
import logo from "../images/logo.png";

function NavBar() {
    const [open, setOpen] = useState(false)
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="logo">
          <img
            src="https://smartinggoods.com/beautynails/wp-content/uploads/sites/36/2022/11/Black-And-Beige-Luxury-Minimalist-Beauty-Salon-Logo-1080-%C3%97-720-px-180x80.png"
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
            <div className="phone_number">+1 916-875-2235</div>
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
